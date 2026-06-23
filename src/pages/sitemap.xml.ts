import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? 'https://mashukOnline.gitverse.site';
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lectures = await getCollection('lectures');

  const paths = [
    '/',
    '/students/',
    ...lectures
      .sort((a, b) => a.data.code.localeCompare(b.data.code))
      .map(l => `/lecture/${l.data.code.replace('.', '-')}/`),
  ];

  const urls = paths
    .map(p => `  <url><loc>${origin}${base}${p === '/' ? '/' : p}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
