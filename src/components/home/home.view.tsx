import Box from '@awsui/components-react/box';
import Button from '@awsui/components-react/button';
import Container from '@awsui/components-react/container';
import SpaceBetween from '@awsui/components-react/space-between';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import Link from '../../components/link';
import Skills from '../../components/skills';
import avatarSrc from '../../images/avatar.png';
import styles from './home.module.scss';

export default function Home(): ReactElement {
  return (
    <AppLayout contentType="default" toolsHide>
      <SpaceBetween direction="vertical" size="xxl">
        <Container>
          <SpaceBetween
            className={styles.content}
            direction="horizontal"
            size="xxl"
          >
            <Box textAlign="center">
              <img
                alt="Jaq Quisido"
                className={styles.avatar}
                height={100}
                src={avatarSrc}
                title="Jaq Quisido"
                width={100}
              />
            </Box>
            <SpaceBetween direction="vertical" size="m">
              <Box className={styles.p} variant="p">
                My name is Jaq{' '}
                <span
                  data-ssml-phoneme-alphabet="ipa"
                  data-ssml-phoneme-ph="kɪsido"
                >
                  Quisido [kɪsido]
                </span>
                , and I am a performer and freelance artist. I focus in musical
                theater, digital comic art, painting, woodworking, and interior
                design.
              </Box>
              <Box textAlign="center">
                <Link to="/projects">
                  <Button variant="primary">
                    <I18n>View projects</I18n>
                  </Button>
                </Link>
              </Box>
            </SpaceBetween>
          </SpaceBetween>
        </Container>
        <Skills />
      </SpaceBetween>
    </AppLayout>
  );
}
