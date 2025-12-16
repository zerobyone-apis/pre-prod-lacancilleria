import Image from 'next/image';
import React from 'react';

export default function WipPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero.webp"
          alt="La Cancillería"
          fill
          priority
          className="object-cover object-center brightness-[0.8]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mar/80 via-mar/60 to-background/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,220,207,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(166,119,83,0.25),transparent_40%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12 py-16 lg:py-24 space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full bg-nieve/80 px-4 py-2 text-mar/90 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(166,119,83,0.18)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em]">
              Site in progress
            </span>
          </div>

          <div className="rounded-3xl border border-secondary/50 bg-nieve/85 backdrop-blur-2xl shadow-[0_25px_90px_rgba(43,62,78,0.22)] p-8 sm:p-10 lg:p-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-mar">
              We are crafting the new site
            </h1>
            <p className="mt-5 max-w-3xl text-lg sm:text-xl text-foreground/80">
              We are refining every detail so you can explore La Cancillería online with the same warmth and elegance you find in person. The full experience is arriving soon.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-mar/90">
                    Digital opening soon
                  </p>
                  <p className="mt-1 text-foreground/70">
                    Our new digital home is almost ready; we are polishing navigation, galleries, and stories to welcome you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-mar/90">
                    Details in motion
                  </p>
                  <p className="mt-1 text-foreground/70">
                    Crafted content, immersive experiences, and seamless flows are being finalized in this release.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex h-11 items-center gap-3 rounded-full border border-secondary/70 bg-white/70 px-5 text-sm font-semibold uppercase tracking-[0.2em] text-mar backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Renewal in progress
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-mar px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-nieve shadow-lg shadow-mar/25 transition hover:-translate-y-[2px] hover:shadow-mar/35"
                href="mailto:contact@lacancilleriaestateuruguay.com"
              >
                Contact us
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
