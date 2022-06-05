import WorkExperience from './WorkExperience';
import SchoolActivity from './SchoolActivity';
import Presentation from './Presentation';
import Contact from './Contact';
import Award from './Award';
import Introduce from './Introduce';
import { PageBackgroundInnerStyle, PageBackgroundStyle } from '../../styles/Page.style';

export default function Cv() {
  return (
    <PageBackgroundStyle>
      <PageBackgroundInnerStyle>
        <Introduce />
        <Award />
        <WorkExperience />
        <SchoolActivity />
        <Presentation />
        <Contact />
      </PageBackgroundInnerStyle>
    </PageBackgroundStyle>
  );
}
