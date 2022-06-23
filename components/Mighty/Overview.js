import { OverviewCover, OverviewStyledTitle, OverviewText } from '../../styles/Overview.style';

export default function Overview() {
  return (
    <OverviewCover>
      <OverviewStyledTitle>
        Mighty Card Counter
      </OverviewStyledTitle>
      <OverviewText>
        This is Mighty Card Counter beta version. <br />
        If you have any requests, please leave an issue or pull request on github.
      </OverviewText>
    </OverviewCover>
  );
}
