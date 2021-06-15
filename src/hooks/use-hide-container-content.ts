import { MutableRefObject, useLayoutEffect } from 'react';

export default function useHideContainerContent(
  ref: MutableRefObject<HTMLDivElement | null>,
): void {
  useLayoutEffect((): void => {
    if (ref.current === null) {
      throw new Error('The Container ref was not mounted.');
    }
    const container: HTMLElement = ref.current.firstChild as HTMLElement;
    const content: HTMLElement = container.lastChild as HTMLElement;
    content.style.setProperty('display', 'none');
  }, [ref]);
}
