import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 43px;
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #d4d4d8;
`;
