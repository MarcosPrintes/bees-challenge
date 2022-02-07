import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  min-width: 6rem;

  span {
    margin-left: 1rem;
    font-size: 1.6rem;
  }
`;
