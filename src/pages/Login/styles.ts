import styled from 'styled-components';
import { ReactComponent as Logo } from '@/assets/logo.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

export const LogoSvg = styled(Logo)`
  position: absolute;
  left: 2.9rem;
  bottom: 1.5rem;
`;
