import FormField from '@awsui/components-react/form-field';
import Pagination from '@awsui/components-react/pagination';
import Table from '@awsui/components-react/table';
import type { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import ProjectBanner from '../../components/project-banner';
import SelectProjectType from '../../components/select-project-type';
import useProjects from './projects.hook';
import Empty from './projects.view.empty';
import Header from './projects.view.header';

export default function Projects(): ReactElement {
  const {
    breadcrumbs,
    columnDefinitions,
    currentPageIndex,
    handlePaginationChange,
    handleProjectTypeChange,
    handleSortingChange,
    items,
    pagesCount,
    projectType,
    sortingColumn,
    sortingDescending,
    visibleColumns,
  } = useProjects();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="table" toolsHide>
      {projectType && <ProjectBanner>{projectType}</ProjectBanner>}
      <Table
        columnDefinitions={columnDefinitions}
        empty={<Empty />}
        header={<Header />}
        items={items}
        onSortingChange={handleSortingChange}
        resizableColumns={false}
        sortingColumn={sortingColumn}
        sortingDescending={sortingDescending}
        stickyHeader
        trackBy="id"
        visibleColumns={visibleColumns}
        wrapLines={false}
        filter={
          <>
            <FormField>
              <SelectProjectType
                onChange={handleProjectTypeChange}
                value={projectType}
              />
            </FormField>
          </>
        }
        pagination={
          <Pagination
            currentPageIndex={currentPageIndex}
            onChange={handlePaginationChange}
            pagesCount={pagesCount}
          />
        }
      />
    </AppLayout>
  );
}
