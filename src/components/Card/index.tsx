import { Tag } from '@/components/Tag';

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

export const Card = () => {
  return (
    <Container>
      <CardDeleteContainer>
        <CardDeleteButton>
          <IconTrash />
        </CardDeleteButton>
      </CardDeleteContainer>
      <Cardinformations>
        <CardTitle> 10-56 Brewing Company </CardTitle>
        <CardAdress> 400 Brown Cir Knox, Indiana - United States </CardAdress>
        <CardTags>
          <Tag />
        </CardTags>
      </Cardinformations>
    </Container>
  );
};
