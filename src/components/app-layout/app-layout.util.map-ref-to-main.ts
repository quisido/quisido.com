export default function mapRefToMain(ref: HTMLDivElement): HTMLElement {
  const main: HTMLElement | null = ref.getElementsByTagName('main').item(0);

  if (main === null) {
    throw new Error('Expected `AppLayout` ref to contain a `main` element.');
  }

  return main;
}
