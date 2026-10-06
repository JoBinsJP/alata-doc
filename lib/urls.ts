export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
export const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://jobinsjp.github.io';

// Next Link adds basePath itself; use this for fetches, plain anchors, and metadata.
export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

export function publicUrl(path: string) {
  return new URL(withBasePath(path), siteOrigin).toString();
}
