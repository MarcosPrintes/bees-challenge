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
    margin-left: 0.5rem;
  }
`;

interface TagTextProps {
  showInput: boolean;
}

export const TagText = styled.span<TagTextProps>`
  font-size: 1.6rem;
  position: relative;
  color: ${({ theme }) => theme.colors.black};

  input {
    position: absolute;
    left: 0;
    max-width: 100%;
    pointer-events: ${({ showInput }) => (showInput ? 'auto' : 'none')};
    opacity: ${({ showInput }) => (showInput ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;

interface ButtonIconProps {
  disabled: boolean;
}

export const ButtonIcon = styled.button.attrs<ButtonIconProps>({
  type: 'button',
})`
  background: transparent;
  border: unset;
  cursor: ${(props) => (props.disabled ? 'unset' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;
