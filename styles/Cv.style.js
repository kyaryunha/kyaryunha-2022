import styled from '@emotion/styled'
import {kyaColor} from "./Layout.style";
import {MediaQueries} from "./MediaQueries";

export const CvBackgroundStyle = styled.div`
  background-color: white;
  color: black;
`;
export const CVBackgroundInnerStyle = styled.div`
  padding: 0 15px;
  ${MediaQueries[0]} {
    width: 1080px;
    margin: auto;
    padding: 0;
  }
`;

export const KyaTag = styled.span`
  color: white;
  background-color: ${props => props.backgroundColor};
  padding: 5px 8px;
  margin: 0 8px 0 0;
  border: none;
  border-radius: 12px;
  height: 15px;
`;

export const KyaTags = styled.div`
`;

export const KyaA = styled.a`
  color: ${props => props.color}
`;


export const CVBackground = styled.div`
`;

export const CVTitle = styled.div`
  font-size: 120%;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const CVSubTitleCover = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CVSubTitleStyle = styled.span`
  font-size: 110%;
  margin-right: 10px;
`;

export const CVList = styled.ul`
  margin: 10px 0 0 10px;
  list-style-type: none;
  line-height: 180%;
  & li:before {
    content: "▶";
    color: grey;
    margin-left: -1.0em;
    margin-right: 0.5em;
  }
  & li {
    word-break:break-all;
  }
`;
export const CVDateStyle = styled.span`
  color: gray;
  font-size: 110%;
  margin: 0 5px 0 0;
`;

export const CVContent = styled.div`
  box-shadow: 0 10px 20px 0 hsla(0,0%,39%,.2);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
`;

export const CVRoleDateStyle = styled.span``;
export const CVSubTitle = ({text}) => {
    return <CVSubTitleStyle>{text}</CVSubTitleStyle>
}

export const CVDate = ({date}) => {
    return <CVDateStyle>{date}</CVDateStyle>
};

export const CVRole = ({role}) => {
    return <KyaTag backgroundColor={kyaColor.gray}>{role}</KyaTag>
};

export const CVRoleDate = ({date, role}) => {
    return (
        <CVRoleDateStyle>
            {role && <CVRole role={role} />}
            {date && <CVDate date={date} />}
        </CVRoleDateStyle>
    )
};

export const CVMetas = styled.div``;
