import styled from "styled-components";
import {BackgroundImageMixin, ColumnFlexMixin} from "../../../Assets/Styles/mixins";
import {TextStyled} from "../../../Assets/Styles";

export const TotalGemsCoins = styled(TextStyled)<{gemsBG: string}>`
  @media screen and (orientation: portrait) {
    width: 18vh;
    height: ${`${0.7*18}vh`};
  }
  @media screen and (orientation: landscape) {
    width: 18vw;
    height: ${`${0.7*18}vw`};
  }
  background-image: ${props => `url("${props.gemsBG}")`};
  ${ColumnFlexMixin};
  ${BackgroundImageMixin};
`