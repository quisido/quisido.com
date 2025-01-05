import type { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';
import ItemId from '../../constants/item-id';
import ProjectId from '../../constants/project-id';
import PROJECTS from '../../constants/projects';
import useMapItemIdToTitle from '../../hooks/use-map-item-id-to-title';
import useMapProjectIdToTitle from '../../hooks/use-map-project-id-to-title';
import type CarouselItem from '../../types/carousel-item';
import type Project from '../../types/project';
import type ProjectItem from '../../types/project-item';
import useCarouselItems from './view-project-item.hook.carousel-items';

interface Props {
  readonly itemIndex: number;
  readonly projectId: ProjectId;
}

interface State {
  readonly breadcrumbs: BreadcrumbGroupProps.Item[];
  readonly carouselItems: CarouselItem[];
  readonly handleIndexChange: (index: number) => void;
  readonly title: string;
}

export default function useViewProjectItem({
  itemIndex,
  projectId,
}: Props): State {
  const project: Project = PROJECTS[projectId];
  const { id: firstItemId }: ProjectItem = project.items[0];
  const { id: itemId }: ProjectItem = project.items[itemIndex];

  // Contexts
  const history = useHistory();
  const translate: TranslateFunction = useTranslate();
  const mapItemIdToTitle = useMapItemIdToTitle();
  const mapProjectIdToTitle = useMapProjectIdToTitle();
  const itemTitle: string | undefined = mapItemIdToTitle(itemId);
  const projectTitle: string | undefined = mapProjectIdToTitle(projectId);

  return {
    title: projectTitle || '...',

    breadcrumbs: useMemo((): BreadcrumbGroupProps.Item[] => {
      const mapItemIdToHref = (id: ItemId): string => {
        if (id === ItemId.Index) {
          return `/projects/${projectId}`;
        }
        return `/projects/${projectId}/${id}`;
      };

      const newBreadcrumbs: BreadcrumbGroupProps.Item[] = [
        {
          href: '/projects',
          text: translate('Projects') || '...',
        },
        {
          href: mapItemIdToHref(firstItemId),
          text: projectTitle || '...',
        },
      ];
      if (itemId === ItemId.Index) {
        return newBreadcrumbs;
      }
      newBreadcrumbs.push({
        href: mapItemIdToHref(itemId),
        text: itemTitle || '...',
      });
      return newBreadcrumbs;
    }, [firstItemId, itemId, itemTitle, projectId, projectTitle, translate]),

    carouselItems: useCarouselItems({
      items: project.items,
      projectTitle,
    }),

    handleIndexChange: useCallback(
      (newIndex: number): void => {
        const { id: newItemId }: ProjectItem = project.items[newIndex];
        history.replace(`/projects/${projectId}/${newItemId}`);
      },
      [history, project.items, projectId],
    ),
  };
}
