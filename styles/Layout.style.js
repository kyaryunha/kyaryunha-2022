import styled from '@emotion/styled';
import {MediaQueries} from "./MediaQueries";

export const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
`;

export const kyaColor = {
  yellow: '#FFBB00',
  gray: '#4A5568',
};


export const StyledHeader = styled.header`
  //background-color: rgba(255, 255, 255, 0.1);
  ${props => props.headerInterval && {
    position: 'absolute',
    width: '100%',
  }}
  z-index: 100;
  background-color: #555;
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
  ${MediaQueries[0]} {
    justify-content: space-between;
    padding-left: 0;
    a {
      display: inline-flex;
    }
    width: 1080px;
    margin: auto;
  }
`;

export const StyledMenuItemsNoHamburger = styled.div`
  display: none;
  ${MediaQueries[0]} {
    display: inline-flex;
  }
`;

export const StyledMenuItemsHamburger = styled.div`
  display: inline-flex;
  ${MediaQueries[0]} {
    display: none;
  }
`;

export const StyledHamburger = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 20px;
  svg {
    width: 25px;
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
  ${MediaQueries[0]} {
    display: inline-flex;
    align-items: center;
    margin: 0 20px;
    width: fit-content;
    background-color: transparent;
    border-top: none;
    padding: 0;
  }
`;
