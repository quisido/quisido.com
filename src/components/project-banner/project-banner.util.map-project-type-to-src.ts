import ProjectType from '../../constants/project-type';
import abstract from '../../images/banners/abstract.jpg';
import dryMedia from '../../images/banners/dry-media.jpg';
import fabrication from '../../images/banners/fabrication.jpg';
import miniatures from '../../images/banners/miniatures.jpg';

export default function mapProjectTypeToSrc(type: ProjectType): string {
  switch (type) {
    case ProjectType.Abstract:
      return abstract;
    case ProjectType.DryMedia:
      return dryMedia;
    case ProjectType.Fabrication:
      return fabrication;
    case ProjectType.Miniatures:
      return miniatures;
  }
}
