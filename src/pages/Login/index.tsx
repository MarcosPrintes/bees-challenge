import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { Container, Form, LogoSvg } from './styles';

export const Login = () => {
  return (
    <Container>
      <Form>
        <p> Please, enter your full name below </p>
        <p> Only alphabetical characters are accepted </p>
        <Input placeholder="Full name" />
        <label htmlFor="years-old">
          <input type="checkbox" name="years-old" id="years-old" />
          Are you older than 18 years old?
        </label>
        <Button> Enter </Button>
      </Form>
      <LogoSvg />
    </Container>
  );
};
