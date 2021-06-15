export default function filterHrefByExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
