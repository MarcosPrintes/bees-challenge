import { Header } from '@/components/Header';
import { Card } from '@/components/Card';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  actionGetBreweries,
  actionGetBreweriesSuccess,
} from '@/store/ducks/breweries/actions';
import { State } from '@/store';

import { Container, Content, LoadingSvg } from './styles';

export const Breweries = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state: State) => state.breweries);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(actionGetBreweries(currentPage));
  }, [dispatch, currentPage]);

  function handleOnDeleteCard(id: number) {
    const newList = list.filter((el) => el.id !== id);
    dispatch(actionGetBreweriesSuccess(newList));
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });

    intersectionObserver.observe(document.getElementById('target') as Element);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {list.map((item) => (
          <Card
            onDeleteCard={handleOnDeleteCard}
            key={item.id}
            brewery={item}
          />
        ))}
        {loading && <LoadingSvg />}
        <div id="target"></div>
      </Content>
    </Container>
  );
};
