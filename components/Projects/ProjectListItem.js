import {
    StyledProjectImage,
    StyledProjectListItem,
    StyledProjectListItemContents,
    StyledProjectListItemDate,
    StyledProjectListItemTitle
} from "../../styles/Projects.style";
import {IconLink} from "../../icons/util.icon";
import {kyaColor} from "../../styles/Layout.style";
import {KyaA} from "../../styles/Page.style";

export default function ProjectListItem ({date, title, contents, coverImageUrl, url}) {
    return <StyledProjectListItem>
        <StyledProjectListItemTitle>
            <StyledProjectListItemDate>
                {date}
            </StyledProjectListItemDate>
            {
                url ?
                        <KyaA href={url} target='_blank'>
                            {title}
                            <IconLink />
                        </KyaA>
                    : title
            }
        </StyledProjectListItemTitle>
        <StyledProjectImage src={coverImageUrl} alt="my picture" />
        <StyledProjectListItemContents>
            {contents}
        </StyledProjectListItemContents>
    </StyledProjectListItem>
}
