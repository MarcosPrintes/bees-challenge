import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled: boolean;
}

export const Button = ({ text, disabled, ...rest }: IProps) => {
  return <Container disabled={disabled}>{text}</Container>;
};
