import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';

import * as fieldHelpers from '@shared/Field/helpers';
import type { InputProps, InputType } from '@shared/Field/models';
import Button from '@shared/Button/components/Button';
import FieldContainer from '@shared/Field/components/FieldStructure/FieldContainer';
import { INPUT_PATTERNS } from '@shared/Field/constants';

/**
 * Input component.
 *
 * @param {InputProps} props Props
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
}: InputProps): JSX.Element => {
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

  const getType = useCallback((): InputType => {
    if (isPassword) {
      return isPasswordVisible ? 'text' : 'password';
    }

    return type;
  }, [isPassword, isPasswordVisible, type]);

  const togglePasswordVisible = useCallback(
    (): void => setIsPasswordVisible(!isPasswordVisible),
    [isPasswordVisible, setIsPasswordVisible],
  );

  const newId = useMemo((): string => fieldHelpers.getFieldId(name), [name]);
  const newPlaceholder = useMemo((): string => placeholder || label, [placeholder, label]);
  const newType = useMemo((): string => getType(), [getType]);

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
        data-testid="field-input"
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
        type={newType}
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
