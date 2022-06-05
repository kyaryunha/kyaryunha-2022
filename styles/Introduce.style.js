import styled from "@emotion/styled";
import {MediaQueries} from "./MediaQueries";

export const IntroduceCover = styled.div`
  margin: 0;
  padding: 40px 0 0 0;
  ${MediaQueries[1]} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

`;
export const IntroduceText = styled.div`
  display: block;
  width: 100%;
  font-size: 120%;
  ${MediaQueries[1]} {
    display: inline-block;
    width: 80%;
  }
`;
export const IntroduceTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 150%;
  line-height: 200%;
`;

export const IntroduceInnerText = styled.div`
  line-height: 150%;
  margin: 20px 0;
`;

export const IntroduceImgCover = styled.div`
  display: block;
  width: min(100%, 200px);
  ${MediaQueries[1]} {
    display: inline-block;
    width: 20%;
  }
  @media print {
    display: none;
  }
`;
export const IntroduceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
