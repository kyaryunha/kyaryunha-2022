import styled from '@emotion/styled';
import { MediaQueries } from './MediaQueries';

export const PageBackgroundStyle = styled.div`
  background-color: white;
  color: black;
`;
export const PageBackgroundInnerStyle = styled.div`
  padding: 0 15px;
  ${MediaQueries[1]} {
    width: 1080px;
    margin: auto;
    padding: 0;
  }
`;

export const KyaTag = styled.span`
  color: white;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : null)};
  padding: 5px 8px;
  margin: 0 8px 0 0;
  border: none;
  border-radius: 12px;
  height: 15px;
`;

export const KyaTags = styled.div`
`;

export const KyaA = styled.a`
  color: ${(props) => (props.color ? props.color : 'black')};
  @media print {
    text-decoration: none;
  }
`;

export const StyledFooter = styled.footer`
  margin: 30px;
  ${MediaQueries[1]} {
    width: 1080px;
    margin: 30px auto;
  }
  @media print {
    display: none;
  }
`;
