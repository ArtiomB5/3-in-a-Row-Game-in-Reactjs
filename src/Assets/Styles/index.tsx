import styled from "styled-components";
import {ColumnFlexMixin} from "./mixins";

export const MenuButtonsColumnStyled = styled.div`
  ${ColumnFlexMixin};
`

export const TextStyled = styled.div`
  @media screen and (orientation: portrait) {
    font-size: 3vh;
  }
  @media screen and (orientation: landscape) {
    font-size: 3vw;
  }
  color: white;
  font-weight: 700;
  text-shadow: 0 0 3px #48137F, 0 0 3px #48137F, 0 0 3px #48137F, 0 0 3px #48137F;
`