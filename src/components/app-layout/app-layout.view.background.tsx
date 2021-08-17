import hsl2rgb from '@charlesstover/hsl2rgb';
import type { MutableRefObject } from 'react';
import { useEffect, useMemo } from 'react';
import useMouseMove, { MouseMoveVariant } from 'use-mouse-move';
import getRandomNumber from '../../utils/get-random-number';
import Star from './app-layout.type.star';
import mapStarsToBackgroundImage from './app-layout.util.map-stars-to-background-image';
import mapRefToMain from './app-layout.util.map-ref-to-main';

interface Props {
  readonly children: MutableRefObject<HTMLDivElement | null>;
}

const COUNT = 67;
const DEPTH_MAX = 5;
const DEPTH_MIN = 1;
const HUE = 327;
const HUE_OFFSET = 45;
const LIGHTNESS_MAX = 0.667;
const LIGHTNESS_MIN = 0.333;
const OFFSET_X_MAX = 50;
const OFFSET_X_MIN = 5;
const OFFSET_Y_MAX = 50;
const OFFSET_Y_MIN = 0;
const OPACITY_MAX = 1;
const OPACITY_MIN = 0.2;
const SATURATION_MAX = 1;
const SATURATION_MIN = 0;
const SIZE_MAX = 1;
const SIZE_MIN = 0.25;
const SPEED_MULTIPLIER = 0.333;
const STARS: Star[] = [];
const TRANSITION_DURATION_MS = 1000;
const TRANSITION_TIMING_FUNCTION = 'ease-out';

const DEPTH_RANGE: number = DEPTH_MAX - DEPTH_MIN;
const OPACITY_RANGE: number = OPACITY_MAX - OPACITY_MIN;
const SIZE_RANGE: number = SIZE_MAX - SIZE_MIN;

for (let i = 0; i < COUNT; i++) {
  const size: number = getRandomNumber(SIZE_MIN, SIZE_MAX);
  const hue: number =
    (Math.round(getRandomNumber(HUE - HUE_OFFSET, HUE + HUE_OFFSET)) % 360) /
    360;
  const lightness: number = getRandomNumber(LIGHTNESS_MIN, LIGHTNESS_MAX);
  const saturation: number = getRandomNumber(SATURATION_MIN, SATURATION_MAX);
  const depth: number =
    DEPTH_MIN + ((SIZE_MAX - size) / SIZE_RANGE) * DEPTH_RANGE;
  const opacity: number =
    OPACITY_MIN + ((SIZE_MAX - size) / SIZE_RANGE) * OPACITY_RANGE;

  const offsetXMultiplier: number = Math.random() < 0.5 ? -1 : 1;
  const offsetYMultiplier: number = Math.random() < 0.5 ? -1 : 1;

  STARS.push({
    color: `rgba(${hsl2rgb(hue, saturation, lightness)
      .map((color: number): number => Math.round(color * 255))
      .join(', ')}, ${opacity})`,
    depth,
    offsetX:
      (offsetXMultiplier *
        (getRandomNumber(OFFSET_X_MIN, OFFSET_X_MAX) * depth)) /
      SPEED_MULTIPLIER,
    offsetY:
      (offsetYMultiplier *
        (getRandomNumber(OFFSET_Y_MIN, OFFSET_Y_MAX) * depth)) /
      SPEED_MULTIPLIER,
    size,
  });
}

export default function AppLayoutBackground({ children: ref }: Props): null {
  const refCurrent: HTMLDivElement | null = ref.current;

  // States
  const [mouseX, mouseY] = useMouseMove(MouseMoveVariant.Page);

  const main: HTMLElement | null = useMemo(
    (): HTMLElement | null => mapRefToMain(refCurrent),
    [refCurrent],
  );

  // Effects
  useEffect((): void | VoidFunction => {
    if (main === null) {
      return;
    }

    const oldBackgroundAttachment: string = main.style.getPropertyValue(
      'background-attachment',
    );

    const oldBackgroundImage: string =
      main.style.getPropertyValue('background-image');

    const oldBackgroundPosition: string = main.style.getPropertyValue(
      'background-position',
    );

    const oldBackgroundRepeat: string =
      main.style.getPropertyValue('background-repeat');

    const oldBackgroundSize: string =
      main.style.getPropertyValue('background-size');

    const oldTransitionDelay: string =
      main.style.getPropertyValue('transition-delay');

    const oldTransitionDuration: string = main.style.getPropertyValue(
      'transition-duration',
    );

    const oldTransitionProperty: string = main.style.getPropertyValue(
      'transition-property',
    );

    const oldTransitionTimingFunction: string = main.style.getPropertyValue(
      'transition-timing-function',
    );

    main.style.setProperty('background-attachment', 'fixed');
    main.style.setProperty('background-position', '0 0');
    main.style.setProperty('background-repeat', 'no-repeat');
    main.style.setProperty('background-size', '100vh 100vh');
    main.style.setProperty('transition-delay', '0s');
    main.style.setProperty('transition-property', 'background-position');

    main.style.setProperty(
      'background-image',
      mapStarsToBackgroundImage(STARS),
    );

    main.style.setProperty(
      'transition-duration',
      `${TRANSITION_DURATION_MS}ms`,
    );

    main.style.setProperty(
      'transition-timing-function',
      TRANSITION_TIMING_FUNCTION,
    );

    return (): void => {
      main.style.setProperty('background-attachment', oldBackgroundAttachment);
      main.style.setProperty('background-image', oldBackgroundImage);
      main.style.setProperty('background-position', oldBackgroundPosition);
      main.style.setProperty('background-repeat', oldBackgroundRepeat);
      main.style.setProperty('background-size', oldBackgroundSize);
      main.style.setProperty('transition-delay', oldTransitionDelay);
      main.style.setProperty('transition-duration', oldTransitionDuration);
      main.style.setProperty('transition-property', oldTransitionProperty);

      main.style.setProperty(
        'transition-timing-function',
        oldTransitionTimingFunction,
      );
    };
  }, [main]);

  useEffect((): void | VoidFunction => {
    if (main === null) {
      return;
    }

    const request: number = requestAnimationFrame((): void => {
      // The center of the screen is 50vw. The image has a 100vh width, so we
      //   subtract 50vh to center the background image.
      // From 0 to 100% of the window width, we adjust this position from -50vw
      //   to +50vw.
      // We add a non-symmetric offset.
      // We divide this range by the depth.
      const mapStarToBackgroundPositionX = ({ depth, offsetX }: Star): string =>
        `calc(50vw - 50vh + (50vw - ${
          (mouseX / window.innerWidth) * 100
        }vw + ${offsetX}vw) / ${depth / SPEED_MULTIPLIER})`;

      main.style.setProperty(
        'background-position-x',
        STARS.map(mapStarToBackgroundPositionX).join(', '),
      );
    });

    return (): void => {
      cancelAnimationFrame(request);
    };
  }, [main, mouseX]);

  useEffect((): void | VoidFunction => {
    if (main === null) {
      return;
    }

    const request: number = requestAnimationFrame((): void => {
      // The center of the screen is 50vh. The image has a 100vh height, so we
      //   subtract 50vh to center the background image, totaling 0.
      // From 0 to 100% of the window height, we adjust this position from -50vh
      //   to +50vh.
      // We add a non-symmetric offset.
      // We divide this range by the depth.
      const mapStarToBackgroundPositionY = ({
        depth,
        offsetY,
      }: Star): string => {
        return `calc(0vh + (50vh - ${
          (mouseY / window.innerHeight) * 100
        }vh + ${offsetY}vh) / ${depth / SPEED_MULTIPLIER})`;
      };

      main.style.setProperty(
        'background-position-y',
        STARS.map(mapStarToBackgroundPositionY).join(', '),
      );
    });

    return (): void => {
      cancelAnimationFrame(request);
    };
  }, [main, mouseY]);

  return null;
}
