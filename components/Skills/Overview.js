import {OverviewCover, OverviewStyledTitle, OverviewTag, OverviewText} from "../../styles/Skills.style";
import {IconSkill} from "../../icons/util.icon";
export default function Overview () {
    return <OverviewCover>
        <OverviewStyledTitle>
            Skills & Experience
        </OverviewStyledTitle>
        <OverviewText>
            It is written in detail. <br/>
            See CV/Project for a summary.<br />
            Written anything about Algorithm, LaTeX yet. <br />
        </OverviewText>
        <OverviewTag>
            <IconSkill type='personal'/> Used in personal projects <br />
            <IconSkill type='team'/> Used in team projects <br />
            <IconSkill type='company' /> Used in company projects <br />
        </OverviewTag>
    </OverviewCover>
}

