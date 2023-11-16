import { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * Button contents
   */
  children: ReactNode;

  /**
   * Button disabled
   */
  disabled?: boolean;
  /**
   * What text color to use
   */
  textColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

// styles props
export interface styleProps {
  readonly textColor?: string;
  readonly backgroundColor?: string;
  readonly disabled?: boolean;
}
