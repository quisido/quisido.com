export default function mapListItemToButton(
  listItem: HTMLLIElement,
): HTMLButtonElement {
  const button: HTMLButtonElement | null = listItem
    .getElementsByTagName('button')
    .item(0);

  if (button === null) {
    throw new Error('Cannot find Pagination list item button.');
  }

  return button;
}
