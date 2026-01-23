'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  defaultVolume?: number;
  tryAutoplay?: boolean;
  position?: 'bottom-left' | 'bottom-right';
};

export function FloatingMusicPlayer({
  src,
  defaultVolume = 0.5,
  tryAutoplay = true,
  position = 'bottom-left',
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Este ref lo usamos para detectar backdrop. En desktop apunta al chip.
  // En mobile, cuando está expandido, apunta al contenedor expandible.
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);
  const [isDarkBackdrop, setIsDarkBackdrop] = useState(false);

  // Responsive
  const [desktop, setDesktop] = useState(false);

  // Mobile: FAB -> chip expanded
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const mobileRootRef = useRef<HTMLDivElement | null>(null);

  // Idle collapse
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleMobileCollapse = () => {
    if (idleRef.current) clearTimeout(idleRef.current);
    idleRef.current = setTimeout(() => setMobileExpanded(false), 3500);
  };

  const cancelMobileCollapse = () => {
    if (idleRef.current) clearTimeout(idleRef.current);
  };

  /* -------------------- AUDIO -------------------- */

  const play = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      await a.play();
      setNeedsGesture(false);
      setIsPlaying(true);
    } catch {
      setNeedsGesture(true);
      setIsPlaying(false);
      // si falla por gesto, abrimos en mobile para que el usuario lo habilite
      if (!desktop) {
        setMobileExpanded(true);
        scheduleMobileCollapse();
      }
    }
  };

  const pause = () => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  const setAudioVolume = (v: number) => {
    const clamped = Math.min(1, Math.max(0, v));
    setVolume(clamped);
    if (audioRef.current) audioRef.current.volume = clamped;
  };

  /* -------------------- RESPONSIVE -------------------- */

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setDesktop(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  /* -------------------- INIT -------------------- */

  useEffect(() => {
    return () => {
      if (idleRef.current) clearTimeout(idleRef.current);
    };
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = volume;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);

    if (tryAutoplay) play();

    return () => {
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* -------------------- PAUSE ONLY FOR AUDIBLE VIDEOS -------------------- */

  useEffect(() => {
    const isAudibleVideo = (v: HTMLVideoElement) => {
      if (v.muted) return false;
      if (v.volume === 0) return false;
      if (v.hasAttribute('muted')) return false;
      return true;
    };

    const handlePlayCapture = (e: Event) => {
      const target = e.target;
      if (!(target instanceof HTMLVideoElement)) return;
      if (!isAudibleVideo(target)) return;
      pause();
    };

    document.addEventListener('play', handlePlayCapture, true);
    return () => document.removeEventListener('play', handlePlayCapture, true);
  }, [isPlaying]);

  /* -------------------- BACKDROP DETECTION -------------------- */

  useEffect(() => {
    const luminance = (rgb: { r: number; g: number; b: number }) =>
      0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;

    const parseRgb = (color: string) => {
      const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!m) return null;
      return { r: +m[1], g: +m[2], b: +m[3] };
    };

    const update = () => {
      const chip = containerRef.current;
      if (!chip) return;

      const rect = chip.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // mirar "debajo" del chip
      const prev = chip.style.pointerEvents;
      chip.style.pointerEvents = 'none';
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      chip.style.pointerEvents = prev || '';

      if (!el) return;

      // Si es video, asumimos dark
      if (el.closest('video')) {
        setIsDarkBackdrop(true);
        return;
      }

      // buscar background real
      let node: HTMLElement | null = el;
      for (let i = 0; i < 8 && node; i++) {
        const bg = getComputedStyle(node).backgroundColor;
        if (bg && bg !== 'transparent' && !bg.includes('rgba(0, 0, 0, 0)')) {
          const rgb = parseRgb(bg);
          if (!rgb) break;
          setIsDarkBackdrop(luminance(rgb) < 140);
          return;
        }
        node = node.parentElement;
      }

      setIsDarkBackdrop(false);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  /* -------------------- MOBILE: IDLE COLLAPSE -------------------- */

  useEffect(() => {
    if (desktop) return;
    if (!mobileExpanded) return;

    scheduleMobileCollapse();

    const onActivity = () => scheduleMobileCollapse();

    window.addEventListener('scroll', onActivity, { passive: true });
    window.addEventListener('touchstart', onActivity);
    window.addEventListener('mousemove', onActivity);

    return () => {
      window.removeEventListener('scroll', onActivity);
      window.removeEventListener('touchstart', onActivity);
      window.removeEventListener('mousemove', onActivity);
    };
  }, [mobileExpanded, desktop]);

  /* -------------------- MOBILE: CLICK OUTSIDE COLLAPSE -------------------- */

  useEffect(() => {
    if (desktop) return;
    if (!mobileExpanded) return;

    const onDown = (e: MouseEvent | TouchEvent) => {
      const root = mobileRootRef.current;
      if (!root) return;
      const target = e.target as Node;
      if (!root.contains(target)) setMobileExpanded(false);
    };

    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [mobileExpanded, desktop]);

  /* -------------------- POSITION -------------------- */

  const wrapperPos =
    position === 'bottom-right'
      ? 'fixed bottom-6 right-6 z-[9999]'
      : 'fixed bottom-6 left-6 z-[9999]';

  /* -------------------- STYLE TOKENS -------------------- */

  const surfaceCls = isDarkBackdrop
    ? 'bg-black/30 border border-white/10 hover:bg-black/40'
    : 'bg-white/40 border border-black/10 hover:bg-white/55';

  const buttonCls = isDarkBackdrop
    ? 'bg-white/10 hover:bg-white/15'
    : 'bg-black/5 hover:bg-black/10';

  const titleCls = isDarkBackdrop
    ? 'text-[13px] font-medium text-white/85'
    : 'text-[13px] font-medium text-black/70';

  const subCls = isDarkBackdrop
    ? 'text-[11px] text-white/55'
    : 'text-[11px] text-black/45';

  const MusicNoteIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3v10.6a3.2 3.2 0 1 0 2 3V7.2l7-2V3l-9 0Z" />
      <circle cx="10" cy="17.8" r="2.2" />
    </svg>
  );

  const PlayIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l12-7-12-7Z" />
    </svg>
  );

  const PauseIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" />
    </svg>
  );

  /* -------------------- UI -------------------- */

  return (
    <div className={wrapperPos}>
      <audio ref={audioRef} src={src} preload="auto" />

      {/* DESKTOP: chip completo siempre */}
      {desktop && (
        <div
          ref={containerRef}
          className={[
            'flex items-center gap-2.5 rounded-full px-3 py-2 backdrop-blur-xl',
            'shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-all duration-200',
            surfaceCls,
            'w-[260px]',
          ].join(' ')}
        >
          <button
            onClick={togglePlay}
            className={[
              'h-9 w-9 rounded-full flex items-center justify-center relative transition',
              buttonCls,
            ].join(' ')}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying && (
              <span className="absolute inset-0 rounded-full bg-piel/15 animate-[ping_2.2s_ease-out_infinite]" />
            )}
            <span
              className={[
                'relative text-[12px] font-semibold leading-none',
                isPlaying
                  ? 'text-piel'
                  : isDarkBackdrop
                  ? 'text-white/75'
                  : 'text-black/55',
              ].join(' ')}
              aria-hidden="true"
            >
              {isPlaying ? 'II' : '▶'}
            </span>
          </button>

          <div className="leading-tight min-w-[72px]">
            <div className={titleCls}>Music</div>
            <div className={subCls}>
              {needsGesture
                ? 'Tap to enable'
                : isPlaying
                ? 'Playing'
                : 'Paused'}
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setAudioVolume(Number(e.target.value))}
              className="music-range w-[86px]"
              data-theme={isDarkBackdrop ? 'dark' : 'light'}
              aria-label="Music volume"
            />
          </div>
        </div>
      )}

      {/* MOBILE: FAB -> chip (expandible) */}
      {!desktop && (
        <div ref={mobileRootRef} className="relative">
          <div
            // Importante: el ref para backdrop debe apuntar al elemento VISIBLE.
            // Cuando está colapsado, no queremos medir el FAB (no hace falta).
            ref={mobileExpanded ? containerRef : undefined}
            className={[
              'flex items-center overflow-hidden rounded-full backdrop-blur-xl',
              'shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out',
              surfaceCls,
              mobileExpanded ? 'w-[240px] px-2 py-2' : 'w-11 h-11 p-0',
            ].join(' ')}
            onTouchStart={() => mobileExpanded && scheduleMobileCollapse()}
            onMouseEnter={() => mobileExpanded && scheduleMobileCollapse()}
          >
            {/* FAB / toggle */}
            {/* Cuando está colapsado: usar Play/Pause para no competir y ser explícito */}
            {!mobileExpanded ? (
              <button
                type="button"
                onClick={() => {
                  setMobileExpanded((v) => !v);
                  if (!mobileExpanded) scheduleMobileCollapse();
                  else cancelMobileCollapse();
                }}
                className={[
                  'relative flex items-center justify-center rounded-full transition',
                  mobileExpanded ? 'h-9 w-9' : 'h-11 w-11',
                  // En colapsado, un poco más sólido para que el icono no se pierda
                  mobileExpanded
                    ? buttonCls
                    : isDarkBackdrop
                    ? 'bg-black/35 hover:bg-black/45 border border-white/10'
                    : 'bg-white/55 hover:bg-white/70 border border-black/10',
                ].join(' ')}
                aria-label={
                  mobileExpanded
                    ? 'Close music controls'
                    : 'Open music controls'
                }
              >
                <span className="relative flex items-center justify-center text-piel">
                  {/* Pulse suave detrás del ícono */}
                  <span
                    className={[
                      'absolute inset-0 rounded-full',
                      'bg-piel/20',
                      // más lento y fluido (ajustá a gusto)
                      isPlaying ? 'animate-[ping_2.8s_ease-out_infinite]' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />

                  {/* Ícono */}
                  <MusicNoteIcon className="relative opacity-90" />
                </span>
              </button>
            ) : (
              <>
                {/* Expanded content */}
                <div
                  className={[
                    'flex items-center gap-2 pl-3 pr-3 transition-opacity duration-200',
                    mobileExpanded
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none',
                  ].join(' ')}
                >
                  <button
                    type="button"
                    onClick={() => {
                      togglePlay();
                      scheduleMobileCollapse();
                    }}
                    className={[
                      'h-9 w-9 rounded-full flex items-center justify-center transition',
                      buttonCls,
                    ].join(' ')}
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                  >
                    <span
                      className={[
                        'text-[12px] font-semibold leading-none',
                        isPlaying
                          ? 'text-piel'
                          : isDarkBackdrop
                          ? 'text-white/75'
                          : 'text-black/55',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </span>
                  </button>

                  <div className="leading-tight min-w-[64px]">
                    <div className={titleCls}>Music</div>
                    <div className={subCls}>
                      {needsGesture
                        ? 'Tap to enable'
                        : isPlaying
                        ? 'Playing'
                        : 'Paused'}
                    </div>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => {
                      setAudioVolume(Number(e.target.value));
                      scheduleMobileCollapse();
                    }}
                    className="music-range w-[82px]"
                    data-theme={isDarkBackdrop ? 'dark' : 'light'}
                    aria-label="Music volume"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
