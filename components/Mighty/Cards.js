import Card from './Card';
import { cardPriorities } from './Card.util';
import { StyledCards } from '../../styles/Mighty.style';

export default function Cards({ type }) {
  return (
    <StyledCards>
      {
        cardPriorities.map((priority) => <Card type={type} priority={priority} key={`card-${type}-${priority}`} />)
      }
    </StyledCards>
  );
}
