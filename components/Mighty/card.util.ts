import {
  IconClub, IconDiamond, IconHeart, IconJoker, IconSpade,
} from '../../icons/card.icon';

export enum CardType {
  JOKER = 'joker',
  SPADE = 'spade',
  DIAMOND = 'diamond',
  HEART = 'heart',
  CLUB = 'club',
}

export interface CardProp {
  type: CardType,
  priority: number,
}

export const normalCardMaxCount = 13;
export const normalCardTypes = [CardType.SPADE, CardType.DIAMOND, CardType.HEART, CardType.CLUB];
export const cardPriorities = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

export const typeToIdx = (type:CardType): number => {
  if (type === CardType.JOKER) return -1;
  if (type === CardType.SPADE) return 0;
  if (type === CardType.DIAMOND) return 1;
  if (type === CardType.HEART) return 2;
  if (type === CardType.CLUB) return 3;
  return -1;
};

export const typeToColor = (type:CardType): string => {
  if (type === CardType.JOKER) return 'black';
  if (type === CardType.SPADE) return 'black';
  if (type === CardType.DIAMOND) return 'red';
  if (type === CardType.HEART) return 'red';
  if (type === CardType.CLUB) return 'black';
  return '';
};

export const priorityToAk = (priority:number): string => {
  if (priority === 14) return 'A';
  if (priority === 13) return 'K';
  if (priority === 12) return 'Q';
  if (priority === 11) return 'J';
  return priority.toString();
};
