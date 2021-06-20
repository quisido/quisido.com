import Box from '@awsui/components-react/box';
import Container from '@awsui/components-react/container';
import SpaceBetween from '@awsui/components-react/space-between';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import Quotes from '../../components/quotes';
import Skills from '../../components/skills';
import styles from './home.module.scss';

const AVATAR_SIZE = 100;
const AVATAR_SRC =
  'https://en.gravatar.com/userimage/153264571/57b76baf3788235b870f35e5fefece71.jpg';

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
                alt="Ace Quisido"
                className={styles.avatar}
                height={AVATAR_SIZE}
                src={`${AVATAR_SRC}?size=${AVATAR_SIZE}`}
                title="Ace Quisido"
                width={AVATAR_SIZE}
              />
            </Box>
            <Box className={styles.p} variant="p">
              My name is Ace{' '}
              <span
                data-ssml-phoneme-alphabet="ipa"
                data-ssml-phoneme-ph="kɪsido"
              >
                Quisido [kɪsido]
              </span>
              , and I am a freelance artist with a focus in painting and
              woodworking. My expertise is in portraiture, and I have a strong
              background in sales and interior design.
            </Box>
          </SpaceBetween>
        </Container>
        <Skills />
        <Quotes />
      </SpaceBetween>
    </AppLayout>
  );
}
