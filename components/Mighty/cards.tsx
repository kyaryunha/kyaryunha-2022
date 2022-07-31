import Card from './card';
import {CardType, cardPriorities} from './card.util';
import { StyledCards } from '../../styles/mighty.style';
import {FC} from "react";

type CardsProps = {
  type: CardType,
}

const Cards:FC<CardsProps> = ({type}) =>{
  return (
    <StyledCards>
      {
        cardPriorities.map((priority) => <Card type={type} priority={priority} key={`card-${type}-${priority}`} />)
      }
    </StyledCards>
  );
}
export default Cards
