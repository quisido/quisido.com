import { ReactElement } from 'react';

export interface Props {
  alt?: string;
  className: string;
  height: number;
  imageClassName: string;
  src: string;
  thumbnail: string;
  width: number;
}

export default function ProjectItemBodyImageLink({
  alt,
  className,
  height,
  imageClassName,
  src,
  thumbnail,
  width,
}: Props): ReactElement {
  return (
    <a className={className} href={src} rel="noreferrer" target="_blank">
      <img
        alt={alt}
        className={imageClassName}
        height={height}
        src={thumbnail}
        width={width}
      />
    </a>
  );
}
