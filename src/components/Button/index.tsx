import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

export const Button = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Container>Teste</Container>;
};
