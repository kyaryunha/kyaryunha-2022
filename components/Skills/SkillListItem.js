import {
    StyledSkillFieldContents,
    StyledSkillFieldName,
    StyledSkillListItem,
    StyledSkillTool, StyledSkillToolContent, StyledSkillToolContents, StyledSkillToolName
} from "../../styles/Skills.style";
import {IconSkill} from "../../icons/util.icon";
import {OverviewText} from "../../styles/Projects.style";

export default function SkillListItem ({field}) {
    return field && <StyledSkillListItem key={field.name}>
        <StyledSkillFieldName>
            {field.name}
        </StyledSkillFieldName>
        <StyledSkillFieldContents>
            {
                Object.keys(field).map((tool) => {
                    if (tool ==='name') return null;
                    else if(tool === 'ALL')
                        return <StyledSkillTool key={`cover-${field.name}-${field[tool].name}`}>
                                    <div key={`contents-${field.name}-${field[tool].name}`}>
                                        {
                                            field[tool].contents.map((data) => {
                                                return <StyledSkillToolContent key={data.content}>
                                                    {data.content}
                                                    {
                                                        data.types && data.types.map((type) => type?<IconSkill type={type} key={`cover-${data.content}-${type}`} />:null
                                                        )
                                                    }
                                                </StyledSkillToolContent>
                                            })
                                        }
                                    </div>
                                </StyledSkillTool>
                    else return <StyledSkillTool key={`cover-${field.name}-${field[tool].name}`}>
                        <StyledSkillToolName key={`name-${field.name}-${field[tool].name}`}>
                            {field[tool].name}
                        </StyledSkillToolName>
                        <StyledSkillToolContents key={`contents-${field.name}-${field[tool].name}`}>
                            {
                                field[tool].contents.map((data) => {
                                    return <StyledSkillToolContent key={data.content}>
                                        {data.content}
                                        {
                                            data.types && data.types.map((type) => type?<IconSkill type={type} key={`cover-${data.content}-${type}`} />:null)
                                        }
                                    </StyledSkillToolContent>
                                })
                            }
                        </StyledSkillToolContents>
                    </StyledSkillTool>
                })
            }
        </StyledSkillFieldContents>
    </StyledSkillListItem>
}
