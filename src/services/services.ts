export const getRndInteger = (max: number, min = 1) =>
  (Math.random() * (max - min) + min).toFixed(1);
