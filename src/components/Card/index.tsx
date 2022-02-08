import { Tag } from '@/components/Tag';
import { Brewery } from '@/store/ducks/breweries/types';

import {
  Container,
  CardDeleteContainer,
  CardDeleteButton,
  CardTitle,
  CardAdress,
  Cardinformations,
  CardTags,
  IconTrash,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/store';
import { actionGetBreweriesSuccess } from '@/store/ducks/breweries/actions';
interface CardProps {
  brewery: Brewery;
  onDeleteCard: (id: number) => void;
}

export const Card = ({ brewery, onDeleteCard }: CardProps) => {
  const dispatch = useDispatch();

  const { list } = useSelector((state: State) => state.breweries);

  const {
    name,
    city,
    state,
    country,
    brewery_type,
    postal_code,
    phone,
    newtag,
  } = brewery;

  function handleDeleteCard() {
    onDeleteCard(brewery.id);
  }

  function handleSetNewTag(text: string) {
    const indexOfCurrentBrewery = list.findIndex(
      (item) => item.id === brewery.id,
    );

    if (indexOfCurrentBrewery !== -1) {
      const newList = list.map((el) => {
        if (el.id === brewery.id) {
          return { ...el, newtag: text };
        } else {
          return el;
        }
      });
      dispatch(actionGetBreweriesSuccess(newList));
    }
  }

  return (
    <Container>
      <CardDeleteContainer>
        <CardDeleteButton onClick={handleDeleteCard}>
          <IconTrash />
        </CardDeleteButton>
      </CardDeleteContainer>
      <Cardinformations>
        <CardTitle> {name} </CardTitle>
        <CardAdress> {`${city}, ${state} - ${country}`} </CardAdress>
        <CardTags>
          <Tag tagType="type" text={brewery_type} />
          <Tag tagType="place" text={postal_code} />
          <Tag tagType="phone" text={phone} />

          {newtag ? (
            <Tag tagType="check" text={newtag} />
          ) : (
            <Tag
              tagType="add"
              canAddTag={true}
              text="add more"
              onSetNewTag={handleSetNewTag}
            />
          )}
        </CardTags>
      </Cardinformations>
    </Container>
  );
};
