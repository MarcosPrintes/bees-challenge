import styled from 'styled-components';

import { ReactComponent as BackIcon } from '@/assets/ic-back-arrow.svg';

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
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;
export const BackButtonIcon = styled(BackIcon)`
  margin-right: 1rem;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 3rem;
  text-transform: capitalize;
`;
