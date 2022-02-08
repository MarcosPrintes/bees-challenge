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

interface CardProps {
  brewery: Brewery;
  onDeleteCard: (id: number) => void;
}

export const Card = ({ brewery, onDeleteCard }: CardProps) => {
  const { name, city, state, country, brewery_type, postal_code, phone } =
    brewery;

  function handleDeleteCard() {
    onDeleteCard(brewery.id);
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
          <Tag tagType="add" canAddTag={true} text="add more" />
        </CardTags>
      </Cardinformations>
    </Container>
  );
};
