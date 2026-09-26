declare module "vanta/dist/vanta.waves.min" {
  type VantaEffect = { destroy: () => void };
  const waves: (options: Record<string, unknown>) => VantaEffect;
  export default waves;
}