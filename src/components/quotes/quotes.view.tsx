import Cards, { CardsProps } from '@awsui/components-react/cards';
import { ReactElement } from 'react';
import CARD_DEFINITION from '../../constants/quote-card-definition';
import ITEMS from '../../constants/quotes';
import styles from './quotes.module.scss';

const CARDS_PER_ROW: CardsProps.CardsLayout[] = [
  {
    cards: 1,
  },
];

export default function Quotes(): ReactElement {
  return (
    <Cards
      cardDefinition={CARD_DEFINITION}
      cardsPerRow={CARDS_PER_ROW}
      className={styles.root}
      items={ITEMS}
      trackBy="author"
    />
  );
}
