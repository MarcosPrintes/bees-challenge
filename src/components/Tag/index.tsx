import { Container } from './styles';

import { ReactComponent as IcPhone } from '@/assets/ic-phone.svg';
import { ReactComponent as IcGrapich } from '@/assets/ic-graphic.svg';
import { ReactComponent as IcPlus } from '@/assets/ic-plus.svg';
import { ReactComponent as IcPlace } from '@/assets/ic-place.svg';

interface TagProps {
  tagType: 'phone' | 'type' | 'place';
  text: string;
}

const ICONS = {
  type: <IcGrapich />,
  phone: <IcPhone />,
  place: <IcPlace />,
};

export const Tag = ({ tagType, text }: TagProps) => {
  return (
    <Container className="tag">
      {ICONS[tagType]}
      <span>{text}</span>
    </Container>
  );
};
