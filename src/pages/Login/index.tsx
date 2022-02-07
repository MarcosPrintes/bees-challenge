import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { Container, Form, LogoSvg, ErrorMssage } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoginRequest } from '@/store/ducks/user/actions';
import { State } from '@/store';

interface IFormInputs {
  name: string;
  isAdult: boolean;
}

const formSchema = yup.object().shape({
  name: yup.string().required('Please, type your name.'),
  isAdult: yup
    .boolean()
    .oneOf([true], 'Do you need be older than 18 years old')
    .required('Do you need be older than 18 years old'),
});

export const Login = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((user: State) => user.user);

  const {
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = ({ name }: IFormInputs) =>
    dispatch(actionLoginRequest({ name }));

  return (
    <Container>
      <h1>{name}</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <p> Please, enter your full name below </p>
        <p> Only alphabetical characters are accepted </p>
        <Input
          placeholder="Full name"
          onChange={(e) =>
            setValue('name', e.target.value, { shouldValidate: true })
          }
        />
        <ErrorMssage>{errors.name?.message}</ErrorMssage>
        <label htmlFor="is-adult">
          <input
            type="checkbox"
            id="is-adult"
            onChange={(e) =>
              setValue('isAdult', e.target.checked as boolean, {
                shouldValidate: true,
              })
            }
          />
          Are you older than 18 years old?
        </label>
        <ErrorMssage>{errors.isAdult?.message}</ErrorMssage>
        <Button type="submit" text="Enter" disabled={!isValid} />
      </Form>
      <LogoSvg />
    </Container>
  );
};
