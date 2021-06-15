import Box, { BoxProps } from '@awsui/components-react/box';
import { CardsProps } from '@awsui/components-react/cards';
import SpaceBetween from '@awsui/components-react/space-between';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import Quote from '../types/quote';
import styles from './quote-card-definition.module.scss';

const IMAGE_SIZE = 64;

const IMAGE_MARGIN: BoxProps.Spacing = {
  bottom: 'n',
  left: 'l',
  // right: 'l',
  // top: 'm',
};

const QUOTE_CARD_DEFINITION: CardsProps<Quote>['cardDefinition'] = {
  header({ author }: Quote): ReactElement {
    return (
      <SpaceBetween direction="horizontal" size="s">
        <Box className={styles.author} color="text-label">
          <I18n author={author}>Review by $author</I18n>
        </Box>
      </SpaceBetween>
    );
  },
  sections: [
    {
      id: 'quote',
      content({ author, image, quote }: Quote): ReactElement {
        return (
          <>
            {image && (
              <Box float="right" margin={IMAGE_MARGIN}>
                <img
                  alt={author}
                  className={styles.image}
                  height={IMAGE_SIZE}
                  src={image}
                  title={author}
                  width={IMAGE_SIZE}
                />
              </Box>
            )}
            {quote}
          </>
        );
      },
    },
  ],
};

export default QUOTE_CARD_DEFINITION;
