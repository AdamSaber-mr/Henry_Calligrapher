import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{jpg,png}',
  { eager: true }
);

/** Look up an optimisable image by its file name, e.g. img('calligraphy-menu.jpg'). */
export function img(name: string): ImageMetadata {
  const entry = files[`../assets/images/${name}`];
  if (!entry) throw new Error(`Unknown image: ${name}`);
  return entry.default;
}
