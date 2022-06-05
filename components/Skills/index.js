import { PageBackgroundInnerStyle, PageBackgroundStyle } from '../../styles/Page.style';
import Overview from './Overview';
import SkillList from './SkillList';

export default function Projects() {
  return (
    <PageBackgroundStyle>
      <PageBackgroundInnerStyle>
        <Overview />
        <SkillList />
      </PageBackgroundInnerStyle>
    </PageBackgroundStyle>
  );
}
