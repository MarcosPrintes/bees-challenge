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
}

export const Card = ({ brewery }: CardProps) => {
  const { name, city, state, country, brewery_type, postal_code, phone } =
    brewery;

  return (
    <Container>
      <CardDeleteContainer>
        <CardDeleteButton>
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
        </CardTags>
      </Cardinformations>
    </Container>
  );
};
