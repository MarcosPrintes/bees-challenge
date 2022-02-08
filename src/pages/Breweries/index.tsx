import { Header } from '@/components/Header';
import { Card } from '@/components/Card';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  actionGetBreweries,
  actionGetBreweriesSuccess,
} from '@/store/ducks/breweries/actions';
import { State } from '@/store';

import { Container, Content, LoadingSvg } from './styles';

export const Breweries = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state: State) => state.breweries);

  useEffect(() => {
    dispatch(actionGetBreweries());
  }, [dispatch]);

  function handleOnDeleteCard(id: number) {
    const newList = list.filter((el) => el.id !== id);
    dispatch(actionGetBreweriesSuccess(newList));
  }

  return (
    <Container>
      <Header />
      <Content>
        {loading ? (
          <LoadingSvg />
        ) : (
          list.map((item) => (
            <Card
              onDeleteCard={handleOnDeleteCard}
              key={item.id}
              brewery={item}
            />
          ))
        )}
      </Content>
    </Container>
  );
};
