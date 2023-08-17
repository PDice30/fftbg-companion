const textSizes: string[] = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
]

export const getSizeUp = (size: string): string => {
  if (size === textSizes[textSizes.length - 1]) return size;
  return textSizes[textSizes.indexOf(size) + 1];
}

export const getSizeDown = (size: string): string => {
  if (size === textSizes[0]) return size;
  return textSizes[textSizes.indexOf(size) - 1];
}