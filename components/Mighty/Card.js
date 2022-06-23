import { priorityToAk, typeToColor, typeToIcon } from './Card.util';
import { StyledCard } from '../../styles/Mighty.style';

export default function Card({ type, priority }) {
  return (
    <StyledCard color={typeToColor(type)}>
      <div>
        {typeToIcon(type)}
      </div>
      <div>
        {priority && priorityToAk(priority)}
      </div>
    </StyledCard>
  );
}
