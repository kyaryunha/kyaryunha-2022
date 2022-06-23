import { PageBackgroundInnerStyle, PageBackgroundStyle } from '../../styles/Page.style';
import CardsAll from './CardsAll';
import Overview from './Overview';

export default function Mighty() {
  return (
    <PageBackgroundStyle>
      <PageBackgroundInnerStyle>
        <Overview />
        <CardsAll />
      </PageBackgroundInnerStyle>
    </PageBackgroundStyle>
  );
}
