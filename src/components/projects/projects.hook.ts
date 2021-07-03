import type { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { PaginationProps } from '@awsui/components-react/pagination';
import type { TableProps } from '@awsui/components-react/table';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { usePagination, useTable } from 'use-awsui';
import PROJECT_ENTRIES from '../../constants/project-entries';
import ProjectId from '../../constants/project-id';
import ProjectType from '../../constants/project-type';
import type Project from '../../types/project';
import isProjectType from '../../utils/is-project-type';
import useColumnDefinitions from './projects.hook.column-definitions';
import type Item from './projects.type.item';
import mapProjectEntryToItem from './projects.util.map-project-entry-to-item';

interface State {
  readonly breadcrumbs: BreadcrumbGroupProps.Item[];
  readonly columnDefinitions: TableProps.ColumnDefinition<Item>[];
  readonly currentPageIndex: number;
  readonly handleProjectTypeChange: (projectType?: ProjectType) => void;
  readonly items: Item[];
  readonly pagesCount: number;
  readonly projectType?: ProjectType;
  readonly sortingColumn?: TableProps.SortingColumn<Item>;
  readonly sortingDescending?: boolean;
  readonly visibleColumns?: string[];
  readonly handlePaginationChange: (
    event: NonCancelableCustomEvent<PaginationProps.ChangeDetail>,
  ) => void;
  readonly handleSortingChange: (
    event: NonCancelableCustomEvent<TableProps.SortingState<Item>>,
  ) => void;
}

const PAGE_SIZE = 10;

const DEFAULT_SORTING_COLUMN: TableProps.SortingColumn<Item> = {
  sortingField: 'id',
};

export default function useAbstract(): State {
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

  const { handleSortingChange, sort, sortingColumn, sortingDescending } =
    useTable({
      defaultSortingColumn: DEFAULT_SORTING_COLUMN,
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
    columnDefinitions: useColumnDefinitions(),
    currentPageIndex,
    handlePaginationChange,
    handleSortingChange,
    pagesCount: Math.ceil(filteredItems.length / PAGE_SIZE) || 1,
    projectType,
    sortingColumn,
    sortingDescending,
    visibleColumns: undefined,

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
      (): Item[] => paginate(filteredItems.sort(sort)),
      [filteredItems, paginate, sort],
    ),
  };
}
