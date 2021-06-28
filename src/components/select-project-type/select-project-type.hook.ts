import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { SelectProps } from '@awsui/components-react/select';
import type { TranslateFunction } from 'lazy-i18n';
import { useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';
import ProjectType from '../../constants/project-type';
import useOptions from './select-project-type.hook.options';

interface Props {
  readonly onChange: (type?: ProjectType) => void;
  readonly value?: ProjectType;
}

interface State {
  readonly ariaLabel?: string;
  readonly options: SelectProps.Option[];
  readonly placeholder?: string;
  readonly selectedOption: SelectProps.Option | null;
  readonly selectedAriaLabel?: string;
  readonly handleChange: (
    event: NonCancelableCustomEvent<SelectProps.ChangeDetail>,
  ) => void;
}

export default function useSelectProjectType({
  onChange,
  value,
}: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const options: SelectProps.Option[] = useOptions();

  return {
    ariaLabel: translate('Type'),
    options,
    placeholder: translate('Select type'),
    selectedAriaLabel: translate('Selected type'),

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<SelectProps.ChangeDetail>): void => {
        onChange(e.detail.selectedOption.value as ProjectType | undefined);
      },
      [onChange],
    ),

    selectedOption: useMemo((): SelectProps.Option | null => {
      if (typeof value === 'undefined') {
        return null;
      }

      const findSelectedOption = (option: SelectProps.Option): boolean =>
        option.value === value;

      // All `ProjectType`s have an associated `Option`.
      return options.find(findSelectedOption) as SelectProps.Option;
    }, [options, value]),
  };
}
