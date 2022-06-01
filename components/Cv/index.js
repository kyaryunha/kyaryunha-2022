import styled from '@emotion/styled'
import WorkExperience from './WorkExperience'
import SchoolActivity from './SchoolActivity'
import Presentation from './Presentation'
import Contact from './Contact'
import Award from './Award'
import {MediaQueries} from "../../styles/MediaQueries";
import {CVBackgroundInnerStyle, CvBackgroundStyle} from "../../styles/Cv.style";
import Introduce from "./Introduce";

export default function Cv () {
  return (
    <CvBackgroundStyle>
        <CVBackgroundInnerStyle>
            <Introduce />
            <Award />
            <WorkExperience />
            <SchoolActivity />
            <Presentation />
            <Contact />
        </CVBackgroundInnerStyle>
    </CvBackgroundStyle>
  )
}

