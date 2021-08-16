import type { AppLayoutProps } from '@awsui/components-react/app-layout';
import AppLayout from '@awsui/components-react/app-layout';
import type { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import type { FlashbarProps } from '@awsui/components-react/flashbar';
import type { ComponentType, ReactElement, ReactNode } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import Notifications from '../../components/notifications';
import useAppLayout from './app-layout.hook';
import Background from './app-layout.view.background';

interface Props {
  Tools?: ComponentType<unknown>;
  breadcrumbs?: BreadcrumbGroupProps.Item[];
  breadcrumbsHide?: boolean;
  children: ReactNode;
  contentType?: AppLayoutProps.ContentType;
  navigationHide?: boolean;
  notifications?: FlashbarProps.MessageDefinition[];
  onToolsChange?: AppLayoutProps['onToolsChange'];
  toolsHide?: boolean;
  toolsOpen?: boolean;
}

export default function CustomAppLayout({
  Tools,
  breadcrumbs,
  breadcrumbsHide = false,
  children,
  contentType,
  navigationHide,
  notifications,
  onToolsChange,
  toolsHide,
  toolsOpen: controlledToolsOpen,
}: Props): ReactElement {
  const {
    ariaLabels,
    handleNavigationChange,
    handleToolsChange,
    navigationOpen,
    ref,
    toolsOpen,
  } = useAppLayout({
    controlledToolsOpen,
    onToolsChange,
  });

  return (
    <div ref={ref}>
      <Background>{ref}</Background>
      <AppLayout
        ariaLabels={ariaLabels}
        contentType={contentType}
        navigation={<Navigation />}
        navigationOpen={navigationOpen}
        navigationHide={navigationHide}
        notifications={<Notifications>{notifications}</Notifications>}
        onNavigationChange={handleNavigationChange}
        onToolsChange={handleToolsChange}
        tools={Tools && <Tools />}
        toolsHide={toolsHide}
        toolsOpen={toolsOpen}
        breadcrumbs={
          !breadcrumbsHide && <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
        }
        content={
          <>
            {children}
            <Footer />
          </>
        }
      />
    </div>
  );
}
