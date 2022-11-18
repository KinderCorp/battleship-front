import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';

import * as fieldHelpers from '@shared/Field/helpers';
import type { FieldTextValue, InputAutocomplete, InputMode, InputType } from '@shared/Field/models';
import Button from '@shared/Button/components/Button';
import FieldContainer from '@shared/Field/components/FieldStructure/FieldContainer';
import { INPUT_PATTERNS } from '@shared/Field/constants';

interface Props {
  autoComplete?: InputAutocomplete;
  className?: string;
  errorMessage?: string;
  inputMode?: InputMode;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  label?: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  pattern?: string;
  placeholder?: string;
  type?: InputType;
  value: FieldTextValue;
  onChange: (name: string, value: FieldTextValue) => void;
}

/**
 * Input component.
 *
 * @param {Props} props Props
 * @return {JSX.Element}
 */
const Input = ({
  autoComplete = 'off',
  className = '',
  errorMessage = '',
  inputMode = 'text',
  isDisabled = false,
  isReadonly = false,
  isRequired = true,
  label = '',
  maxLength = 524288, // Default Javascript value for inputs
  minLength = 0,
  name,
  onChange,
  pattern = INPUT_PATTERNS.ALL,
  placeholder = '',
  type = 'text',
  value,
}: Props): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const isPassword = useMemo((): boolean => type === 'password', [type]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      const { value: newValue } = event.target;

      onChange(name, newValue);
    },
    [name, onChange],
  );

  const togglePasswordVisible = useCallback(
    (): void => setIsPasswordVisible(!isPasswordVisible),
    [isPasswordVisible, setIsPasswordVisible],
  );

  const newId = useMemo((): string => fieldHelpers.getFieldId(name), [name]);
  const newPlaceholder = useMemo((): string => placeholder || label, [placeholder, label]);

  return (
    <FieldContainer
      className={className}
      errorMessage={errorMessage}
      htmlFor={newId}
      isDisabled={isDisabled}
      label={label}
    >
      <input
        autoComplete={autoComplete}
        autoCorrect="off"
        className="field-input"
        disabled={isDisabled}
        id={newId}
        inputMode={inputMode}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        onChange={handleChange}
        pattern={pattern}
        placeholder={newPlaceholder}
        readOnly={isReadonly}
        required={isRequired}
        type={type}
        value={value}
      />

      {isPassword && (
        <div className="toggle-password">
          <Button
            iconName={isPasswordVisible ? 'EyeHide' : 'Eye'}
            onClick={togglePasswordVisible}
            size="small"
            style="none"
          />
        </div>
      )}
    </FieldContainer>
  );
};

export default Input;
