import type Star from './app-layout.type.star';

export default function mapStarToBackgroundImage({
  color,
  size,
}: Star): string {
  return `
    radial-gradient(
      ${color} 0%,
      transparent ${size}%,
      transparent 100%
    )
  `;
}
