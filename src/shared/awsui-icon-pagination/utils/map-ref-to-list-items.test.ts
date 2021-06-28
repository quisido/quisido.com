import mapRefToListItems from './map-ref-to-list-items';

describe('mapRefToListItems', (): void => {
  it('should throw an error if the ref is not instantiated', (): void => {
    expect((): void => {
      mapRefToListItems({
        current: null,
      });
    }).toThrowError('Could not find Carousel div.');
  });

  it('should throw an error if the DIV does not contain a UL', (): void => {
    expect((): void => {
      mapRefToListItems({
        current: document.createElement('div'),
      });
    }).toThrowError('Cannot find Pagination UL.');
  });

  it('should throw an error if the UL does not contain 3+ LIs', (): void => {
    const div: HTMLDivElement = document.createElement('div');
    const ul: HTMLUListElement = document.createElement('ul');
    const nextLi: HTMLLIElement = document.createElement('li');
    const page1Li: HTMLLIElement = document.createElement('li');
    const previousLi: HTMLLIElement = document.createElement('li');
    ul.appendChild(previousLi);
    ul.appendChild(page1Li);
    ul.appendChild(nextLi);
    div.appendChild(ul);
    expect((): void => {
      mapRefToListItems({
        current: div,
      });
    }).toThrowError('Could not find Pagination navigation.');
  });
});
