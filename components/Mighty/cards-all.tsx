import Cards from './cards';
import { CardType, normalCardTypes } from './card.util';
import Card from './card';
import { StyledCards, StyledCardsAll } from '../../styles/mighty.style';

const CardsAll = () => {
  return (
    <StyledCardsAll>
      <StyledCards key="cards-unique">
        <Card type={CardType.JOKER}  priority={0} key="card-joker"/>
      </StyledCards>
      {
          normalCardTypes.map((type: CardType) => <Cards type={type} key={`cards-${type}`} />)
      }
    </StyledCardsAll>
  );
}

export default CardsAll;
