import { colorBorderItemFocused } from '@awsui/design-tokens';
import type { MutableRefObject } from 'react';
import { useLayoutEffect, useRef } from 'react';
import ElementMutator from '../../../../shared/element-mutator';
import mapListItemToButton from '../../utils/map-list-item-to-button';
import mapRefToListItems from '../../utils/map-ref-to-list-items';
import styles from './awsui-icon-pagination.module.scss';

interface Props {
  currentPageIndex: number;
  height: number;
  icons: string[];
  width: number;
}

interface State {
  ref: MutableRefObject<HTMLDivElement | null>;
}

export default function useAwsuiIconPagination({
  currentPageIndex,
  height,
  icons,
  width,
}: Props): State {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useLayoutEffect((): VoidFunction => {
    const elementMutators: ElementMutator[] = [];
    const listItems: HTMLLIElement[] = mapRefToListItems(ref);

    const listItemsCount: number = listItems.length;
    for (let i = 0; i < listItemsCount; i++) {
      const listItem: HTMLLIElement = listItems[i];
      const listItemMutator: ElementMutator = new ElementMutator(listItem);
      listItemMutator.addClassName(styles.listItem);
      listItemMutator.addStyleProperty('margin-top', '0');
      elementMutators.push(listItemMutator);

      const button: HTMLButtonElement = mapListItemToButton(listItem);
      const buttonMutator: ElementMutator = new ElementMutator(button);
      buttonMutator.addClassName(styles.button);
      buttonMutator.addStyleProperties({
        'background-image': `url("${icons[i]}")`,
        height: `${height}px`,
        width: `${width}px`,
      });
      elementMutators.push(buttonMutator);
    }

    const selectedListItem: HTMLLIElement = listItems[currentPageIndex - 1];
    const selectedButton: HTMLButtonElement =
      mapListItemToButton(selectedListItem);
    const selectedButtonMutator: ElementMutator = new ElementMutator(
      selectedButton,
    );
    selectedButtonMutator.addStyleProperty(
      'border-color',
      colorBorderItemFocused,
    );
    elementMutators.push(selectedButtonMutator);

    return (): void => {
      for (const elementMutator of elementMutators) {
        elementMutator.reset();
      }
    };
  }, [currentPageIndex, height, icons, width]);

  return {
    ref,
  };
}
