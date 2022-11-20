import type { ReactNode } from 'react';

export type InputAutocomplete = 'current-password' | 'new-password' | 'off' | 'on' | 'username';

export type InputMode = 'email' | 'numeric' | 'text';

export type InputType = 'email' | 'hidden' | 'number' | 'password' | 'text';

// Field values
export type FieldTextValue = string;

// Props
export interface FieldLabelProps {
  className?: string;
  htmlFor: string;
  label: string;
}

export interface FieldErrorProps {
  className?: string;
  message?: string;
}

export interface FieldContainerProps {
  children: ReactNode;
  className?: string;
  errorMessage?: string;
  htmlFor?: string;
  isDisabled?: boolean;
  label?: string;
}

export interface InputProps {
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
