import type { CancelableEventHandler } from '@awsui/components-react/internal/events';
import type { LinkProps } from '@awsui/components-react/link';
import { useLink as useRouterLink } from 'use-awsui-router';
import filterHrefByExternal from '../../utils/filter-href-by-external';

interface State {
  external: boolean;
  handleFollow: CancelableEventHandler<LinkProps.FollowDetail>;
}

export default function useLink(to: string): State {
  const { handleFollow } = useRouterLink();

  return {
    external: filterHrefByExternal(to),
    handleFollow,
  };
}
