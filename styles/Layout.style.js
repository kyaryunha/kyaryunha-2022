import styled from '@emotion/styled';
import { MediaQueries } from './MediaQueries';

export const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
`;

const KyaColor = () => {
  const yellow = (props) => `rgba(255, 200, 0, ${props.opacity || 1.0})`;
  const gray = (props) => `rgba(50, 60, 70, ${props.opacity || 1.0})`;
  const white = (props) => `rgba(255, 255, 255, ${props.opacity || 1.0})`;
  return Object.freeze({
    yellow, gray, white,
  });
};

export const kyaColor = KyaColor();

export const StyledHeader = styled.header`
  //background-color: rgba(255, 255, 255, 0.1);
  ${(props) => props.headerInterval && {
    position: 'absolute',
    width: '100%',
  }}
  z-index: 100;
  background-color: ${kyaColor.yellow};
  @media print {
    display: none;
  }
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    margin: 10px 10px;
    &:hover {
      background-color: ${kyaColor.white({ opacity: 0.2 })};
    }
  }
  ${MediaQueries[1]} {
    justify-content: space-between;
    padding-left: 0;
    a {
      display: inline-flex;
    }
    width: 1080px;
    margin: auto;
  }
`;

export const StyledHeaderTitle = styled.div`
  font-size: 150%;
  margin: 0 20px;
`;

export const StyledMenuItemsNoHamburger = styled.div`
  display: none;
  ${MediaQueries[1]} {
    display: inline-flex;
  }
`;

export const StyledMenuItemsHamburger = styled.div`
  display: inline-flex;
  ${MediaQueries[1]} {
    display: none;
  }
`;

export const StyledHamburger = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 20px;
  svg {
    width: 25px;
  }
  border-radius: 5px;
  &:hover {
    background-color: ${kyaColor.white({ opacity: 0.2 })};
  }
`;

export const StyledMenuTitle = styled.div`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledMenuOpen = styled.div`
  position: fixed;
  display: block;
  z-index: 200;
  width: 100%;
  height: 100vh;
  top: 0; 
  left: 0;
  padding: 50px;
  background-color: rgba(30, 30, 30, 0.95);
`;
export const StyledMenuItem = styled.div`
  // 햄버거일 때 ( Opened )
  width: 100%;
  border-top: 1px solid #eee;
  padding: 20px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  svg {
    width: 25px;
  }
  // 아닐 때 
  ${MediaQueries[1]} {
    display: inline-flex;
    align-items: center;
    margin: 0 20px;
    width: fit-content;
    background-color: transparent;
    border-top: none;
    padding: 0;
  }
`;

export const StyledPageBreak = styled.div`
  page-break-after: auto;
`;
