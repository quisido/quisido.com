export default function mapRefToMain(
  ref: HTMLDivElement | null,
): HTMLElement | null {
  if (ref === null) {
    return null;
  }
  return ref.getElementsByTagName('main').item(0);
}
