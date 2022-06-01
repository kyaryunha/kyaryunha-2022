import styled from '@emotion/styled';
import {Canvas} from '@react-three/fiber';
import {MediaQueries} from "./MediaQueries";

export const StyledMainBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #FFA500, #FFE211);
`;


export const StyledMainCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw!important;
  height: 50vh!important;
  ${MediaQueries[0]} {
    width: 50vw!important;
    height: 100vh!important;
  }
`;

export const StyledMainText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  font-size: 150%;
  font-weight: bold;
  line-height: 180%;
  top: 50vh;
  left: 0;
  width: 100vw;
  height: 50vh;
  ${MediaQueries[0]} {
    top: 0;
    left: 50vw;
    width: 50vw;
    height: 100vh;
    justify-content: left;
    vertical-align: top;
    align-items: center;
   }
`;

export const StyledMidText = styled.div`
  width: 100vw;
  height: 100px;
`;
