import Box from '@awsui/components-react/box';
import Button from '@awsui/components-react/button';
import FormField from '@awsui/components-react/form-field';
import Header from '@awsui/components-react/header';
import Pagination from '@awsui/components-react/pagination';
import SpaceBetween from '@awsui/components-react/space-between';
import Table from '@awsui/components-react/table';
import I18n from 'lazy-i18n';
import type { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import SelectProjectType from '../../components/select-project-type';
import Link from '../link';
import useProjects from './projects.hook';

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
      <Table
        columnDefinitions={columnDefinitions}
        items={items}
        onSortingChange={handleSortingChange}
        resizableColumns={false}
        sortingColumn={sortingColumn}
        sortingDescending={sortingDescending}
        stickyHeader
        trackBy="id"
        visibleColumns={visibleColumns}
        wrapLines={false}
        empty={
          <SpaceBetween direction="vertical" size="m">
            <Box variant="p">
              <I18n>No projects matched your filter.</I18n>
            </Box>
            <Link to="/projects">
              <Button>
                <I18n>Reset</I18n>
              </Button>
            </Link>
          </SpaceBetween>
        }
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
        header={
          <Header>
            <I18n>Projects</I18n>
          </Header>
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
