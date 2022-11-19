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
