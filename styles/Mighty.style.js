import styled from '@emotion/styled';

export const StyledCards = styled.div`
`;

export const StyledCard = styled.div`
  color: ${(props) => (props.color ? props.color : 'black')};
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    svg {
      display: block;
      width: 25px;
    }
    margin: 10px;
  }
  width: 60px;
  height: 80px;
  padding: 5px;
  background: white;
  border: 1px solid black;
  margin: 5px;
  font-size: 120%;
  border-radius: 10px;
  font-weight: bold;
  user-select:none;
  &:hover {
    cursor: pointer;
    color: blue;
    border-color: blue;
  }
`;
