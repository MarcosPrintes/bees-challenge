import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: IProps) => {
  return <Container {...rest}></Container>;
};
