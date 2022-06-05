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
  @media print {
    display: none;
  }
`;

export const OverviewTag = styled.div`
  line-height: 160%;
  margin-bottom: 40px;
  @media print {
    margin-bottom: 0;
  }
`;

export const StyledSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 160%;
`;
export const StyledSkillListItem = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 10px 20px 0 hsla(0,0%,39%,.2);
  border-radius: 15px;
  margin-bottom: 25px;
  @media print { 
    padding: 20px 0;
    box-shadow: none;
  }
`;

export const StyledSkillFieldName = styled.div`
  width: fit-content;
  font-size: 120%;
  font-weight: bold;
  line-height: 200%;
  padding: 0 10px;
  background-color: rgba(255, 200, 0, 0.5);
  border-radius: 15px;
`;
export const StyledSkillFieldContents = styled.div`
`;
export const StyledSkillTool = styled.ul`
  margin-left: 15px;
  
`;
export const StyledSkillToolName = styled.div`
  font-weight: bold;
  line-height: 180%;
`;
export const StyledSkillToolContents = styled.div`
  margin-left: 15px;
`;
export const StyledSkillToolContent = styled.div`
`;
