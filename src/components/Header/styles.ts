import styled from 'styled-components';

import { ReactComponent as BackIcon } from '@/assets/back-arrow.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.68rem 1.98rem;
  background: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  border: unset;
  cursor: pointer;
`;
export const BackButtonIcon = styled(BackIcon)``;

export const UserName = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 3rem;
  text-transform: capitalize;
`;
