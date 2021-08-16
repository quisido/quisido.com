import type Star from './app-layout.type.star';
import mapStarToBackgroundImage from './app-layout.util.map-star-to-background-image';

export default function mapStarsToBackgroundImage(
  stars: readonly Star[],
): string {
  return stars.map(mapStarToBackgroundImage).join(', ');
}
