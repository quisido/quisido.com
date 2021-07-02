import type { SelectProps } from '@awsui/components-react/select';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import ProjectType from '../../constants/project-type';
import PROJECT_TYPES from '../../constants/project-types';

export default function useSelectProjectTypeOptions(): SelectProps.Option[] {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return useMemo((): SelectProps.Option[] => {
    const mapProjectTypeToLabel = (
      projectType: ProjectType,
    ): string | undefined => {
      switch (projectType) {
        case ProjectType.Abstract:
          return translate('Abstract');
        case ProjectType.DryMedia:
          return translate('Dry media');
        case ProjectType.Fabrication:
          return translate('Fabrication');
        case ProjectType.Miniatures:
          return translate('Miniatures');
        // case ProjectType.Sculptures:
        //   return translate('Sculptures');
        default:
          // Switch should be exhaustive.
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          throw new Error(`Unknown project type: ${projectType}`);
      }
    };

    const mapProjectTypeToOption = (
      projectType: ProjectType,
    ): SelectProps.Option => ({
      label: mapProjectTypeToLabel(projectType) || '...',
      value: projectType,
    });

    const sort = (a: ProjectType, b: ProjectType): -1 | 0 | 1 => {
      const aLabel: string = mapProjectTypeToLabel(a) || a;
      const bLabel: string = mapProjectTypeToLabel(b) || b;
      if (aLabel < bLabel) {
        return -1;
      }
      if (aLabel > bLabel) {
        return 1;
      }
      return 0;
    };

    return [
      {
        label: translate('All types') || '...',
        value: '',
      },
      ...Array.from(PROJECT_TYPES.values())
        .sort(sort)
        .map(mapProjectTypeToOption),
    ];
  }, [translate]);
}
