import styled from "@emotion/styled";

export const OverviewCover = styled.div`
  margin: 0;
  padding: 40px 0 0 0;
`;
export const OverviewStyledTitle = styled.div`
  width: fit-content;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 150%;
  padding:5px 15px;
  border-top: 10px solid rgba(255, 200, 0);
  border-radius: 3px;
`;

export const OverviewText = styled.div`
  line-height: 160%;
  margin-bottom: 40px;
`;

export const StyledProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledProjectListItem = styled.span`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #eee;
  margin: 10px 15px;
  box-shadow: 0 10px 20px 0 hsla(0,0%,39%,.2);
  border-radius: 15px;
`;
export const StyledProjectListItemDate = styled.span`
  color: gray;
  margin-right: 10px;
`;
export const StyledProjectListItemTitle = styled.div`
  padding: 10px 30px;
  font-size: 110%;
  font-weight: bold;
`;
export const StyledProjectImage = styled.img`
  max-width: 300px;
  height: auto;
`;

export const StyledProjectListItemContents = styled.div`
    padding: 10px;
`;
