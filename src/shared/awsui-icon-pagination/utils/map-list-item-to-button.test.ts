import mapListItemToButton from './map-list-item-to-button';

describe('mapListItemToButton', (): void => {
  it('should return the button child node', (): void => {
    const button: HTMLButtonElement = document.createElement('button');
    const listItem: HTMLLIElement = document.createElement('li');
    listItem.appendChild(button);
    expect(mapListItemToButton(listItem)).toBe(button);
  });

  it('should throw an error if there is no button child node', (): void => {
    const listItem: HTMLLIElement = document.createElement('li');
    expect((): void => {
      mapListItemToButton(listItem);
    }).toThrowError('Cannot find Pagination list item button.');
  });
});
