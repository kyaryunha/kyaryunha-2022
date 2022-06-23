import styled from '@emotion/styled';

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
