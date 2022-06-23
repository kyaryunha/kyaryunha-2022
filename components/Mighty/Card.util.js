import {
  IconClub, IconDiamond, IconHeart, IconJoker, IconMighty, IconSpade,
} from '../../icons/card.icon';

export const CARD = {
  MIGHTY: 'mighty',
  JOKER: 'joker',
  SPADE: 'spade',
  DIAMOND: 'diamond',
  HEART: 'heart',
  CLUB: 'club',
};

export const cardTypes = [CARD.SPADE, CARD.DIAMOND, CARD.HEART, CARD.CLUB];
export const cardPriorities = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

export const typeToColor = (type) => {
  if (type === CARD.MIGHTY) return 'black';
  if (type === CARD.JOKER) return 'black';
  if (type === CARD.SPADE) return 'black';
  if (type === CARD.DIAMOND) return 'red';
  if (type === CARD.HEART) return 'red';
  if (type === CARD.CLUB) return 'black';
  return '';
};

export const typeToIcon = (type) => {
  if (type === CARD.MIGHTY) return <IconMighty />;
  if (type === CARD.JOKER) return <IconJoker />;
  if (type === CARD.DIAMOND) return <IconDiamond />;
  if (type === CARD.HEART) return <IconHeart />;
  if (type === CARD.SPADE) return <IconSpade />;
  if (type === CARD.CLUB) return <IconClub />;
  return undefined;
};

export const priorityToAk = (priority) => {
  if (priority === 14) return 'A';
  if (priority === 13) return 'K';
  if (priority === 12) return 'Q';
  if (priority === 11) return 'J';
  return priority.toString();
};
