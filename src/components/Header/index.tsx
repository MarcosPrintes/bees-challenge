import { State } from '@/store';
import { actionLogout } from '@/store/ducks/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, BackButton, BackButtonIcon, UserName } from './styles';

export const Header = () => {
  const { name } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  function handleBackButton() {
    dispatch(actionLogout());
  }

  return (
    <Container>
      <BackButton onClick={handleBackButton}>
        <BackButtonIcon />
        Go back
      </BackButton>

      <UserName> {name} </UserName>
    </Container>
  );
};
