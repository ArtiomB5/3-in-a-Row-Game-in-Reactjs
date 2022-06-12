import styled from "styled-components";
import {BackgroundImageMixin, ColumnFlexMixin, RowFlexMixin} from "./mixins";

let gameFieldDay = require('../Images/Tileset/PNG/Backgrounds/bg_day.jpg');

export const GameField = styled.div`
  @media screen and (orientation: portrait) {
    ${ColumnFlexMixin};
    height: 99.9vh;
    width: 99.9vw;
  }
  @media screen and (orientation: landscape) {
    ${RowFlexMixin};
    height: 99.9vh;
    width: 99.9vw;
  }
  background-image: url("${gameFieldDay}");
  ${BackgroundImageMixin};
`