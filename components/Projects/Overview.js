import {OverviewCover, OverviewStyledTitle, OverviewText} from "../../styles/Projects.style";
import {ErrorMessage} from "../../styles/Layout.style";

export default function Overview () {
    return <OverviewCover>
        <OverviewStyledTitle>
            Projects
        </OverviewStyledTitle>
        <OverviewText>
            Company projects are not listed. <br/>
            Only personal/team projects are listed.
        </OverviewText>
    </OverviewCover>
}

