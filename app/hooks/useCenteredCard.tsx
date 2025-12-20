import { useEffect, useState, useRef } from "react";

export function useCenteredCard(itemCount: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function detectCenter() {
      const cards = Array.from(container.children) as HTMLElement[];
      let minDistance = Infinity;
      let detectedIndex = 0;

      const centerX = container.scrollLeft + container.offsetWidth / 2;

      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(centerX - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          detectedIndex = idx;
        }
      });

      setCenterIndex(detectedIndex);
    }

    container.addEventListener("scroll", detectCenter, { passive: true });
    detectCenter();

    return () => container.removeEventListener("scroll", detectCenter);
  }, [itemCount]);

  return { containerRef, centerIndex };
}
