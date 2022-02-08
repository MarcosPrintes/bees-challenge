import React, { useState } from 'react';

import { Container, ButtonIcon, TagText } from './styles';

import { ReactComponent as IcPhone } from '@/assets/ic-phone.svg';
import { ReactComponent as IcGrapich } from '@/assets/ic-graphic.svg';
import { ReactComponent as IcPlus } from '@/assets/ic-plus.svg';
import { ReactComponent as IcPlace } from '@/assets/ic-place.svg';
import { ReactComponent as IcCheck } from '@/assets/ic-check.svg';

interface TagProps {
  tagType: 'phone' | 'type' | 'place' | 'add' | 'check';
  text: string;
  canAddTag?: boolean;
  onSetNewTag?: (text: string) => void;
}

const ICONS = {
  type: <IcGrapich />,
  phone: <IcPhone />,
  place: <IcPlace />,
  add: <IcPlus />,
  check: <IcCheck />,
};

export const Tag = ({
  canAddTag = false,
  tagType,
  text,
  onSetNewTag,
}: TagProps) => {
  const [showInput, setShowInput] = useState(false);
  const [newTag, setNewTag] = useState('');

  function handleNewTag({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    value !== '' && setNewTag(value);
  }

  function handleOnKeyupTag(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key === 'Escape') {
      setShowInput(false);
      return;
    }

    if (key === 'Enter' && newTag !== '') {
      onSetNewTag && onSetNewTag(newTag);
    }
  }

  return (
    <Container className="tag">
      <ButtonIcon onClick={() => setShowInput(true)} disabled={!canAddTag}>
        {ICONS[tagType]}
      </ButtonIcon>
      <TagText showInput={showInput}>
        {text}
        {showInput && canAddTag && (
          <input
            placeholder="New tag"
            onKeyUp={handleOnKeyupTag}
            onChange={handleNewTag}
            value={newTag}
          />
        )}
      </TagText>
    </Container>
  );
};
