import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  background: #fffef0;
  padding: 9.8rem 9.9rem 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3rem;
  overflow-y: scroll;
  justify-items: center;
`;
