import styled from '@emotion/styled';

export const StyledCardBoardController = styled.div`
  background-color: darkgreen;
  user-select: none;
`;

export const StyledInformation = styled.span`
  color: white;
  font-weight: bold;
  margin: 0 15px;
`;

type StyledButtonProps = {
  width?: string,
  padding?: string,
  margin?: string,
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => (props.width && `width: ${props.width};`)}
  padding: ${(props) => (props.padding ? props.padding : '8px')};
  margin: ${(props) => (props.margin ? props.margin : '10px')};
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledGirudaCounter = styled.div`
  background-color: green;
  user-select: none;
`;

export const StyledCardsAll = styled.div`
  background-color: #28a745;
  padding: 5px;
`;
export const StyledCards = styled.div`
`;

type StyledCardProps = {
  activate?: boolean,
  color?: string,
  size?: number,
}
export const StyledCard = styled.div<StyledCardProps>`
  color: ${(props) => ((props.activate && props.color) ? props.color : 'white')};
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  div {
    display: flex;
    justify-content: center;
    svg {
      margin: ${(props) => `${(props.size ? props.size*2 : 2)}px`};
      fill: ${(props) => (props.activate ? props.color : 'white')};
      display: block;
    }
    margin-top: ${(props) => `${(props.size ? props.size*2 : 2)}px`};
    margin-left: ${(props) => `${(props.size ? props.size*7 : 7)}px`};
    margin-right: ${(props) => `${(props.size ? props.size*7 : 7)}px`};
    margin-bottom: ${(props) => `${(props.size ? props.size*5 : 5)}px`};
  }
  width: ${(props) => `${(props.size ? props.size*50 : 50)}px`};
  height: ${(props) => `${(props.size ? props.size*70 : 70)}px`};
  padding: ${(props) => `${(props.size ? props.size*5 : 5)}px`};
  background: ${(props) => (props.activate ? 'white' : props.color)};
  border: 1px solid ${(props) => (props.activate ? props.color : 'white')};
  margin: ${(props) => `${(props.size ? props.size*5 : 5)}px`};
  font-size: ${(props) => `${(props.size ? props.size*20 : 20)}px`};
  border-radius: 5px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
