import Cards from '@awsui/components-react/cards';
import FormField from '@awsui/components-react/form-field';
import Pagination from '@awsui/components-react/pagination';
import type { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import ProjectBanner from '../../components/project-banner';
import SelectProjectType from '../../components/select-project-type';
import CARD_DEFINITION from './projects.constant.card-definition';
import useProjects from './projects.hook';
import Empty from './projects.view.empty';
import Header from './projects.view.header';

export default function Projects(): ReactElement {
  const {
    breadcrumbs,
    currentPageIndex,
    handlePaginationChange,
    handleProjectTypeChange,
    items,
    pagesCount,
    projectType,
    visibleSections,
  } = useProjects();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="table" toolsHide>
      {projectType && <ProjectBanner>{projectType}</ProjectBanner>}
      <Cards
        cardDefinition={CARD_DEFINITION}
        empty={<Empty />}
        header={<Header />}
        items={items}
        stickyHeader
        trackBy="id"
        visibleSections={visibleSections}
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
