import Box from '@awsui/components-react/box';
import type { CardsProps } from '@awsui/components-react/cards';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import ProjectType from '../../constants/project-type';
import type Item from './projects.type.item';
import Banner from './projects.view.banner';
import Title from './projects.view.title';

const CARD_DEFINITION: CardsProps.CardDefinition<Item> = {
  header({ icon, id, pathname }: Item): ReactElement {
    return (
      <>
        <Banner id={id} pathname={pathname} src={icon} />
        <Box textAlign="center">
          <Title id={id} pathname={pathname} />
        </Box>
      </>
    );
  },
  sections: [
    {
      header: <I18n>Type</I18n>,
      id: 'type',
      content({ type }: Item): ReactElement {
        switch (type) {
          case ProjectType.Abstract:
            return <I18n>Abstract</I18n>;
          case ProjectType.DryMedia:
            return <I18n>Dry media</I18n>;
          case ProjectType.Fabrication:
            return <I18n>Fabrication</I18n>;
          case ProjectType.Miniatures:
            return <I18n>Miniatures</I18n>;
          case ProjectType.Sculptures:
            return <I18n>Sculptures</I18n>;
        }
      },
    },
  ],
};

export default CARD_DEFINITION;
