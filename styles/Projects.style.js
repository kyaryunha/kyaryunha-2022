import styled from "@emotion/styled";
import {MediaQueries} from "./MediaQueries";

export const OverviewCover = styled.div`
  margin: 0;
  padding: 40px 0 0 0;
  // ${MediaQueries[1]} {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-around;
  // }
`;
export const OverviewStyledTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 150%;
`;

export const OverviewText = styled.div`
  line-height: 160%;
`;

export const StyledProjectListItem = styled.div`
  background-color: #eee;
  padding: 10px 30px;
  margin: 5px;
  border-radius: 10px;
`;
export const StyledProjectListItemTitle = styled.div`
  font-size: 110%;
    font-weight: bold;
`;
