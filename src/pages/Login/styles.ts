import { Theme } from './../../theme/theme';
import styled from 'styled-components';
import { ReactComponent as Logo } from '@/assets/logo.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const LogoSvg = styled(Logo)`
  position: absolute;
  left: 2.9rem;
  bottom: 1.5rem;
`;

export const Form = styled.form`
  max-width: 40rem;
  text-align: center;

  p {
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    text-align: left;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    font-size: 1.4rem;

    input[type='checkbox'] {
      margin-right: 0.5rem;
    }
  }
`;

export const ErrorMssage = styled.p`
  text-align: center !important;
  color: ${({ theme }) => theme.colors.error};
`;
