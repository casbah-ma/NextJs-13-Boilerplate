import { ReactElement, ReactNode } from "react";

export interface ButtonProps {
  /**
   * Button Children
   */
  children: ReactNode;
  /**
   * Button onClick function
   */
  onClick?: () => void;
  /**
   * Button disabled
   */
  disabled?: boolean;
  /**
   *  Button text color
   */
  textColor?: string;
  /**
   * Button background color
   */
  backgroundColor?: string;
}

// styles props
export interface styleProps {
  readonly textColor?: string;
  readonly backgroundColor?: string;
  readonly disabled?: boolean;
}
