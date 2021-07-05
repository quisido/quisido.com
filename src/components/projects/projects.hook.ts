import type { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { PaginationProps } from '@awsui/components-react/pagination';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { usePagination } from 'use-awsui';
import PROJECT_ENTRIES from '../../constants/project-entries';
import ProjectId from '../../constants/project-id';
import ProjectType from '../../constants/project-type';
import type Project from '../../types/project';
import isProjectType from '../../utils/is-project-type';
import type Item from './projects.type.item';
import mapProjectEntryToItem from './projects.util.map-project-entry-to-item';

interface State {
  readonly breadcrumbs: BreadcrumbGroupProps.Item[];
  readonly currentPageIndex: number;
  readonly handleProjectTypeChange: (projectType?: ProjectType) => void;
  readonly items: Item[];
  readonly pagesCount: number;
  readonly projectType?: ProjectType;
  readonly visibleSections?: string[];
  readonly handlePaginationChange: (
    event: NonCancelableCustomEvent<PaginationProps.ChangeDetail>,
  ) => void;
}

const NO_VISIBLE_SECTIONS: string[] = [];
const PAGE_SIZE = 10;

export default function useProjects(): State {
  // Contexts
  const history = useHistory();
  const location = useLocation();
  const translate: TranslateFunction = useTranslate();

  // States
  const urlSearchParams: URLSearchParams = useMemo(
    (): URLSearchParams => new URLSearchParams(location.search),
    [location.search],
  );

  const typeUrlSearchParam: string | null = urlSearchParams.get('type');
  const projectType: ProjectType | undefined = useMemo(():
    | ProjectType
    | undefined => {
    if (!isProjectType(typeUrlSearchParam)) {
      return;
    }
    return typeUrlSearchParam;
  }, [typeUrlSearchParam]);

  const {
    currentPageIndex,
    paginate,
    handleChange: handlePaginationChange,
  } = usePagination({
    pageSize: PAGE_SIZE,
  });

  const filter = useCallback(
    ([, project]: [ProjectId, Project]): boolean => {
      if (typeof projectType === 'undefined') {
        return true;
      }
      return project.type === projectType;
    },
    [projectType],
  );

  const filteredItems: Item[] = useMemo(
    (): Item[] => PROJECT_ENTRIES.filter(filter).map(mapProjectEntryToItem),
    [filter],
  );

  return {
    currentPageIndex,
    handlePaginationChange,
    pagesCount: Math.ceil(filteredItems.length / PAGE_SIZE) || 1,
    projectType,
    visibleSections:
      typeof projectType === 'undefined' ? undefined : NO_VISIBLE_SECTIONS,

    breadcrumbs: useMemo(
      (): BreadcrumbGroupProps.Item[] => [
        {
          href: '/projects',
          text: translate('Projects') || '...',
        },
      ],
      [translate],
    ),

    handleProjectTypeChange: useCallback(
      (newProjectType: ProjectType | undefined): void => {
        const newUrlSearchParams: URLSearchParams = new URLSearchParams(
          urlSearchParams,
        );
        if (typeof newProjectType === 'undefined') {
          newUrlSearchParams.delete('type');
        } else {
          newUrlSearchParams.set('type', newProjectType);
        }
        history.push({
          ...location,
          search: newUrlSearchParams.toString(),
        });
      },
      [history, location, urlSearchParams],
    ),

    items: useMemo(
      (): Item[] => paginate(filteredItems),
      [filteredItems, paginate],
    ),
  };
}
