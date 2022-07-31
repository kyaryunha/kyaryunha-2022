import { PageBackgroundInnerStyle, PageBackgroundStyle } from '../../styles/Page.style';
import CardsAll from './cards-all';
import Overview from './overview';
import CardBoardController from "./card-board-controller";
import GirudaCounter from "./giruda-counter";
import {StyledButton} from "../../styles/mighty.style";
import {useStores} from "../../stores";
import MightyLogs from "./mighty-logs";

const Mighty = () => {
  const {girudaStore, mightyStore} = useStores();
  const handleClick = () => {
      girudaStore.init();
      mightyStore.init();
  }
  return (
    <PageBackgroundStyle>
      <PageBackgroundInnerStyle>
        <Overview />

          <StyledButton onClick={handleClick}>Clear</StyledButton>
          <CardBoardController />
          <GirudaCounter />
          <CardsAll />
          <MightyLogs />
      </PageBackgroundInnerStyle>
    </PageBackgroundStyle>
  );
}
export default Mighty;
