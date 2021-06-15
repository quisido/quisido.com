import BreadcrumbGroup, {
  BreadcrumbGroupProps,
} from '@awsui/components-react/breadcrumb-group';
import { ReactElement } from 'react';
import ResumeButton from '../../components/resume-button';
import useBreadcrumbs from './breadcrumbs.hook';
import styles from './breadcrumbs.module.scss';

interface Props {
  children?: readonly BreadcrumbGroupProps.Item[];
}

const DEFAULT_CHILDREN: readonly BreadcrumbGroupProps.Item[] = Object.freeze(
  [],
);

export default function Breadcrumbs({
  children = DEFAULT_CHILDREN,
}: Props): ReactElement {
  const { ariaLabel, handleFollow, items } = useBreadcrumbs(children);

  return (
    <div className={styles.root}>
      <BreadcrumbGroup
        ariaLabel={ariaLabel}
        items={items}
        onFollow={handleFollow}
      />
      <ResumeButton />
    </div>
  );
}
