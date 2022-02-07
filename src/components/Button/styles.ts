import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  font-size: 1.6rem;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  border: unset;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.onPrimary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? darken(0.1, theme.colors.onPrimary)
        : darken(0.1, theme.colors.secondary)};
  }
`;
