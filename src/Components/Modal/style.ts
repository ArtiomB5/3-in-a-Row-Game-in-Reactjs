import styled from "styled-components";
import { SoundStyled } from "../Sound/style";

export const ManualButtonStyled = styled(SoundStyled)`
    @media screen and (orientation: portrait) {
    width: 15vh;
    height: 5vh;
    margin: 1vh;
  };
  @media screen and (orientation: landscape) {
    width: 15vw;
    height: 5vw;
    margin: 1vw;
  };
  border-radius: none;
`;

export const ModalStyled = styled.div<{vis: boolean}>`
  display: ${props => props.vis ? 'block' : 'none'}; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
`;

export const ModalContentStyled = styled.div`
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
`;

export const ModalCloseStyled = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
