import { Header } from '@/components/Header';
import { Card } from '@/components/Card';

import { Container, Content } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetBreweries } from '@/store/ducks/breweries/actions';
import { State } from '@/store';
export const Breweries = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state: State) => state.breweries);

  useEffect(() => {
    dispatch(actionGetBreweries());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Content>
        {list.map((item) => (
          <Card key={item.id} brewery={item} />
        ))}
      </Content>
    </Container>
  );
};
