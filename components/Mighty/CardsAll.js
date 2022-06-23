import Cards from './Cards';
import { CARD, cardTypes } from './Card.util';
import Card from './Card';
import { StyledCards } from '../../styles/Mighty.style';

export default function CardsAll() {
  return (
    <>
      <StyledCards key="cards-unique">
        <Card type={CARD.MIGHTY} />
        <Card type={CARD.JOKER} />
      </StyledCards>
      {
        cardTypes.map((type) => <Cards type={type} key={`cards-${type}`} />)
      }
    </>
  );
}
