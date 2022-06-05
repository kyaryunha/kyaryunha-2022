import { PageBackgroundInnerStyle, PageBackgroundStyle } from '../../styles/Page.style';
import Overview from './Overview';
import ProjectList from './ProjectList';

export default function Projects() {
  return (
    <PageBackgroundStyle>
      <PageBackgroundInnerStyle>
        <Overview />
        <ProjectList />
      </PageBackgroundInnerStyle>
    </PageBackgroundStyle>
  );
}
