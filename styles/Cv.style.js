import styled from '@emotion/styled';
import { kyaColor } from './Layout.style';
import { KyaTag } from './Page.style';
import { MediaQueries } from './MediaQueries';

export const CVBackground = styled.div`
`;

export const CVTitle = styled.div`
  font-size: 120%;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const CVSubTitleCover = styled.div`
  line-height: 200%;
  ${MediaQueries[0]} {
    display: flex;
    justify-content: space-between;
  }
`;
export const CVSubTitleStyle = styled.div`
  display: block;
  font-size: 110%;
  margin-right: 10px;
  ${MediaQueries[0]} {
    display: inline-block;
  }
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

export const CVRoleDateStyle = styled.div`
  display: block;
  ${MediaQueries[0]} {
    display: inline-block;
  }
`;
export function CVSubTitle({ text }) {
  return <CVSubTitleStyle>{text}</CVSubTitleStyle>;
}

export function CVDate({ date }) {
  return <CVDateStyle>{date}</CVDateStyle>;
}

export function CVRole({ role }) {
  return <KyaTag backgroundColor={kyaColor.gray(0)}>{role}</KyaTag>;
}

export function CVRoleDate({ date, role }) {
  return (
    <CVRoleDateStyle>
      {role && <CVRole role={role} />}
      {date && <CVDate date={date} />}
    </CVRoleDateStyle>
  );
}

export const CVMetas = styled.div``;
