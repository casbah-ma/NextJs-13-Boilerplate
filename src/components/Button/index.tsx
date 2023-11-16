import { ButtonWrapper } from './Button.styles';
import { ButtonProps } from './Button.types';

const MyButton = ({
  children,
  onClick,
  textColor,
  backgroundColor,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
};

export default MyButton;
