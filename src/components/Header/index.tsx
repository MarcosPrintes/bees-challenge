import { State } from '@/store';
import { useSelector } from 'react-redux';
import { Container, BackButton, BackButtonIcon, UserName } from './styles';

export const Header = () => {
  const { name } = useSelector((state: State) => state.user);
  return (
    <Container>
      <BackButton>
        <BackButtonIcon />
      </BackButton>

      <UserName> {name} </UserName>
    </Container>
  );
};
