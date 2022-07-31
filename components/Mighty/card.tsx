import {
  CardProp, CardType, priorityToAk, typeToColor, typeToIdx,
} from './card.util';
import { StyledCard } from '../../styles/mighty.style';
import {observer} from "mobx-react";
import {useStores} from "../../stores";
import {IconClub, IconDiamond, IconHeart, IconJoker, IconSpade} from "../../icons/card.icon";

const typeToIcon = (type:CardType) => {
  if (type === CardType.JOKER) return <IconJoker />;
  if (type === CardType.DIAMOND) return <IconDiamond />;
  if (type === CardType.HEART) return <IconHeart />;
  if (type === CardType.SPADE) return <IconSpade />;
  if (type === CardType.CLUB) return <IconClub />;
  else return <>Error</>;
};

const Card = observer((card:CardProp) => {
  const {cardBoardStore, mightyStore} = useStores();
  const onClick = () => {
    mightyStore.update(card.type, card.priority);
  };
  return (
    <StyledCard
        activate={card.type==='joker'?mightyStore.joker:mightyStore.normalCards[typeToIdx(card.type)][card.priority]}
        color={typeToColor(card.type)}
        size={cardBoardStore.size}
        onClick={() => onClick()}
    >
      {
        card.priority !== 0 &&
          <>
            <div>
                {typeToIcon(card.type)}
            </div>
            <div>
                {priorityToAk(card.priority)}
            </div>
          </>
      }
      {
        card.priority === 0 && typeToIcon(card.type)
      }
    </StyledCard>
  );
});

export default Card;
