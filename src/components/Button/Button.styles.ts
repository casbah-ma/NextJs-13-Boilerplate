import styled from 'styled-components';
import { styleProps } from './Button.types';
import tw from 'twin.macro';

export const ButtonWrapper = styled.button<styleProps>`
  ${tw`py-3.5 px-8 font-semibold rounded-lg flex justify-center items-center text-black cursor-pointer
    capitalize bg-gradient-to-r from-blue-400 to-blue-500 border border-blue-500`};
  // using css
  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
`;
