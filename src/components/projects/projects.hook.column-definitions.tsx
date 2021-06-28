import type { TableProps } from '@awsui/components-react/table';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import Link from '../../components/link';
import ProjectId from '../../constants/project-id';
import ProjectType from '../../constants/project-type';
import useMapProjectIdToTitle from '../../hooks/use-map-project-id-to-title';
import type Item from './projects.type.item';

interface TitleProps {
  id: ProjectId;
  pathname: string;
}

function Title({ id, pathname }: TitleProps): ReactElement {
  const mapProjectIdToTitle = useMapProjectIdToTitle();
  return <Link to={pathname}>{mapProjectIdToTitle(id)}</Link>;
}

export default function useProjectsColumnDefinitions(): TableProps.ColumnDefinition<Item>[] {
  return useMemo(
    (): TableProps.ColumnDefinition<Item>[] => [
      {
        header: '',
        id: 'icon',
        width: 64,
        cell({ icon }: Item): ReactElement {
          return <img alt="" aria-hidden height={24} src={icon} width={24} />;
        },
      },
      {
        header: <I18n>Title</I18n>,
        id: 'id',
        sortingField: 'id',
        cell({ id, pathname }: Item): ReactElement {
          return <Title id={id} pathname={pathname} />;
        },
      },
      {
        header: <I18n>Type</I18n>,
        id: 'type',
        sortingField: 'type',
        width: 240,
        cell({ type }: Item): ReactElement {
          switch (type) {
            case ProjectType.Abstract:
              return <I18n>Abstract</I18n>;
            case ProjectType.DryMedia:
              return <I18n>Dry media</I18n>;
            case ProjectType.Fabrication:
              return <I18n>Fabrication</I18n>;
            case ProjectType.Miniatures:
              return <I18n>Miniatures</I18n>;
          }
        },
      },
    ],
    [],
  );
}
