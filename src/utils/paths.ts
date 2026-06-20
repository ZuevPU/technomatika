/** Internal URL with Astro base path (e.g. GitHub Pages subpath). */
export function path(to: string): string {
  if (to.startsWith('http://') || to.startsWith('https://')) return to;
  if (to.startsWith('#')) return to;

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const hashIndex = to.indexOf('#');
  const pathname = hashIndex >= 0 ? to.slice(0, hashIndex) : to;
  const hash = hashIndex >= 0 ? to.slice(hashIndex) : '';

  const normalized =
    pathname === '' || pathname === '/'
      ? `${base}/`
      : `${base}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;

  return `${normalized}${hash}`;
}
