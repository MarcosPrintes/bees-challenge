import styled from 'styled-components';

import { ReactComponent as Trash } from '@/assets/ic-trash.svg';

export const Container = styled.div`
  padding: 1.4rem 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.4rem;
  max-width: 38.2rem;
  minb-height: 28.2rem;

  @media screen and (max-width: 765px) {
    max-width: 100%;
  }
`;

export const Cardinformations = styled.div`
  padding: 1rem 2rem 3.5rem;
`;

export const CardDeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconTrash = styled(Trash)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.2s ease;
`;

export const CardDeleteButton = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  border: unset;

  &:hover {
    .icon-trash {
      transform: scale(1.3);
    }
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.onPrimaryDark};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
`;

export const CardAdress = styled.p`
  color: #3f3f46;
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  .tag {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;
