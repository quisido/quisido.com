import Select from '@awsui/components-react/select';
import type { ReactElement } from 'react';
import ProjectType from '../../constants/project-type';
import useSelectProjectType from './select-project-type.hook';

interface Props {
  onChange: (value?: ProjectType) => void;
  value?: ProjectType;
}

export default function SelectProjectType({
  onChange,
  value,
}: Props): ReactElement {
  const {
    ariaLabel,
    handleChange,
    options,
    placeholder,
    selectedAriaLabel,
    selectedOption,
  } = useSelectProjectType({
    onChange,
    value,
  });

  return (
    <Select
      ariaLabel={ariaLabel}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      selectedAriaLabel={selectedAriaLabel}
      selectedOption={selectedOption}
    />
  );
}
