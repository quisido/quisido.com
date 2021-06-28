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
    const previousLi: HTMLLIElement = document.createElement('li');
    const nextLi: HTMLLIElement = document.createElement('li');
    ul.appendChild(previousLi);
    ul.appendChild(nextLi);
    div.appendChild(ul);
    expect((): void => {
      mapRefToListItems({
        current: div,
      });
    }).toThrowError('Could not find Pagination navigation.');
  });

  it('should return only page list items', (): void => {
    const div: HTMLDivElement = document.createElement('div');
    const ul: HTMLUListElement = document.createElement('ul');
    const previousLi: HTMLLIElement = document.createElement('li');
    const page1Li: HTMLLIElement = document.createElement('li');
    const page2Li: HTMLLIElement = document.createElement('li');
    const page3Li: HTMLLIElement = document.createElement('li');
    const nextLi: HTMLLIElement = document.createElement('li');
    ul.appendChild(previousLi);
    ul.appendChild(page1Li);
    ul.appendChild(page2Li);
    ul.appendChild(page3Li);
    ul.appendChild(nextLi);
    div.appendChild(ul);
    expect(
      mapRefToListItems({
        current: div,
      }),
    ).toEqual([page1Li, page2Li, page3Li]);
  });
});
