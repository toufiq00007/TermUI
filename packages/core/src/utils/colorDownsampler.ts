const colorCache = new Map<string, number>();

function hexToRgb(hex: string): [number, number, number] {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function getAnsi256Pool(): { id: number; r: number; g: number; b: number }[] {
  const pool: { id: number; r: number; g: number; b: number }[] = [];
  const standardColors = [
    [0, 0, 0], [128, 0, 0], [0, 128, 0], [128, 128, 0], [0, 0, 128], [128, 0, 128], [0, 128, 128], [192, 192, 192],
    [128, 128, 128], [255, 0, 0], [0, 255, 0], [255, 255, 0], [0, 0, 255], [255, 0, 255], [0, 255, 255], [255, 255, 255]
  ];
  standardColors.forEach((rgb, id) => pool.push({ id, r: rgb[0], g: rgb[1], b: rgb[2] }));

  const steps = [0, 95, 135, 175, 215, 255];
  let id = 16;
  for (let r = 0; r < 6; r++) {
    for (let g = 0; g < 6; g++) {
      for (let b = 0; b < 6; b++) {
        pool.push({ id, r: steps[r], g: steps[g], b: steps[b] });
        id++;
      }
    }
  }

  for (let i = 0; i < 24; i++) {
    const gray = 8 + i * 10;
    pool.push({ id: 232 + i, r: gray, g: gray, b: gray });
  }
  return pool;
}

const ansi256Pool = getAnsi256Pool();

export function downsampleToAnsi256(hex: string): number {
  if (colorCache.has(hex)) return colorCache.get(hex)!;

  const [r1, g1, b1] = hexToRgb(hex);
  let minDistance = Infinity;
  let closestAnsiId = 15;

  for (const target of ansi256Pool) {
    const distance = 
      2 * Math.pow(r1 - target.r, 2) +
      4 * Math.pow(g1 - target.g, 2) +
      3 * Math.pow(b1 - target.b, 2);

    if (distance < minDistance) {
      minDistance = distance;
      closestAnsiId = target.id;
    }
  }

  colorCache.set(hex, closestAnsiId);
  return closestAnsiId;
}