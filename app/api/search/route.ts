import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// staticGET exports the full Orama search index as a build-time asset;
// the client (RootProvider search type "static") fetches it once and
// searches locally — no server needed, works on GitHub Pages.
export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
