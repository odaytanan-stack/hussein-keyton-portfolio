import { useEffect, useRef } from "react";

export function WaveBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let effect: { destroy: () => void } | undefined;

    async function start() {
      try {
        const [THREE, waves] = await Promise.all([
          import("three"),
          import("vanta/dist/vanta.waves.min"),
        ]);
        if (disposed || !ref.current) return;
        const importedWaves = waves.default as unknown;
        const createWaves = typeof importedWaves === "function"
          ? importedWaves
          : (importedWaves as { default?: unknown })?.default;
        if (typeof createWaves !== "function") return;
        effect = createWaves({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x121922,
          shininess: 27,
          waveHeight: 12,
          waveSpeed: 0.65,
          zoom: 0.85,
        });
      } catch (error) {
        console.warn("Animated background unavailable", error);
      }
    }

    void start();
    return () => {
      disposed = true;
      effect?.destroy();
    };
  }, []);

  return <div ref={ref} className="wave-background" aria-hidden="true" />;
}