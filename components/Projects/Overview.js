import {OverviewCover, OverviewStyledTitle, OverviewText} from "../../styles/Projects.style";
import {ErrorMessage} from "../../styles/Layout.style";

export default function Overview () {
    return <OverviewCover>
        <OverviewStyledTitle>
            Projects
        </OverviewStyledTitle>
        <OverviewText>
            <ErrorMessage>
                It will be updated later. <br />
            </ErrorMessage>
            Only personal projects are listed. <br/>
            Company projects are not listed.
        </OverviewText>
    </OverviewCover>
}

