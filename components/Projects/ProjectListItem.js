import {StyledProjectListItem, StyledProjectListItemTitle} from "../../styles/Projects.style";

export default function ProjectListItem ({title}) {
    return <StyledProjectListItem>
        <StyledProjectListItemTitle>
            {title}
        </StyledProjectListItemTitle>
    </StyledProjectListItem>
}
