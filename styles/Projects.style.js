import styled from '@emotion/styled';

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
