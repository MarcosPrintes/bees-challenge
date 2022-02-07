import styled from 'styled-components';

export const Container = styled.button`
  font-size: 1.6rem;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  border: unset;
  background: ${(props) => props.theme.colors.onPrimary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.4rem;
  cursor: pointer;
`;
