import styled from '@emotion/styled';

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

export const OverviewTag = styled.div`
  line-height: 160%;
  margin-bottom: 40px;
  @media print {
    margin-bottom: 0;
  }
`;
