import styled from 'styled-components';

import { ReactComponent as Loading } from '@/assets/loading.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background: #fffef0;
  padding: 9.8rem 9.9rem 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 3rem;
  overflow-y: scroll;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 9.8rem 5rem 6rem;
  }

  @media screen and (max-width: 765px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 5rem 2rem 5rem;
  }
`;

export const LoadingSvg = styled(Loading)`
  width: 10rem;
  height: 6.4rem;
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
`;
