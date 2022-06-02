import SkillListItem from "./SkillListItem";
import {StyledSkillList} from "../../styles/Skills.style";
import {FRONT_END, BACK_END, PYTHON, OTHERS} from "./skill.data";

export default function SkillList () {
    return <StyledSkillList>
        {FRONT_END && <SkillListItem field={FRONT_END} key={FRONT_END.name}/> }
        {BACK_END && <SkillListItem field={BACK_END} key={BACK_END.name}/>}
        {PYTHON && <SkillListItem field={PYTHON} key={PYTHON.name}/>}
        {OTHERS && <SkillListItem field={OTHERS} key={OTHERS.name}/>}
    </StyledSkillList>
}
