import styled from "styled-components";
import { TextStyled } from "../../Assets/Styles";
import { ColumnFlexMixin } from "../../Assets/Styles/mixins";

export const SoundStyled = styled(TextStyled)`
  ${ColumnFlexMixin};
  @media screen and (orientation: portrait) {
    width: 4vh;
    height: 4vh;
    margin: 1vh;
  }
  @media screen and (orientation: landscape) {
    width: 4vw;
    height: 4vw;
    margin: 1vw;
  }
  border: 2px solid #48137f;
  border-radius: 50%;
  background: rgb(206, 179, 212);
  background: linear-gradient(
    45deg,
    rgba(206, 179, 212, 1) 0%,
    rgba(250, 241, 201, 1) 100%
  );
  color: #48137f;
  text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
  cursor: pointer;
`;
