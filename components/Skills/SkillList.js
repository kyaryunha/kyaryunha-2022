import SkillListItem from './SkillListItem';
import { StyledSkillList } from '../../styles/Skills.style';
import {
  FRONT_END, BACK_END, PYTHON, OTHERS, ALGORITHM,
} from './skill.data';

export default function SkillList() {
  return (
    <StyledSkillList>
      {FRONT_END && <SkillListItem field={FRONT_END} key={FRONT_END.name} pageBreak /> }
      {BACK_END && <SkillListItem field={BACK_END} key={BACK_END.name} pageBreak />}
      {PYTHON && <SkillListItem field={PYTHON} key={PYTHON.name} pageBreak />}
      {ALGORITHM && <SkillListItem field={ALGORITHM} key={ALGORITHM.name} pageBreak />}
      {OTHERS && <SkillListItem field={OTHERS} key={OTHERS.name} pageBreak />}
    </StyledSkillList>
  );
}
