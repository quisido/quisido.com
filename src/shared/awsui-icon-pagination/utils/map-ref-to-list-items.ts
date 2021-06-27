import type { MutableRefObject } from 'react';

export default function mapRefToListItems(
  ref: MutableRefObject<HTMLDivElement | null>,
): HTMLLIElement[] {
  const wrapper: HTMLDivElement | null = ref.current;
  if (wrapper === null) {
    throw new Error('Could not find Carousel div.');
  }

  const ul: HTMLUListElement | null = wrapper
    .getElementsByTagName('ul')
    .item(0);
  if (ul === null) {
    throw new Error('Cannot find Pagination UL.');
  }

  const listItems: HTMLLIElement[] = Array.from(ul.getElementsByTagName('li'));

  if (listItems.length < 3) {
    throw new Error('Could not find Pagination navigation.');
  }

  // Remove Previous button.
  listItems.shift();

  // Remove Next button.
  listItems.pop();

  return listItems;
}
