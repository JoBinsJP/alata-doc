import { source } from '@/lib/source';
import { llms } from 'fumadocs-core/source';
import { publicUrl } from '@/lib/urls';

export const revalidate = false;

export function GET() {
  const index = llms(source)
    .index()
    .replace(/\]\((\/docs(?:\/[^)]*)?)\)/g, (_match, path: string) => `](${publicUrl(path)})`);
  return new Response(index, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
