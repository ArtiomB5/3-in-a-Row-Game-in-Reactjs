import styled from "styled-components";
import {RowFlexMixin} from "../../../Assets/Styles/mixins";
import * as Constants from '../../../Services/Constants';

export const TimeStyled = styled.div`
  ${RowFlexMixin};
  @media screen and (orientation: portrait) {
    width: ${Constants.GEM_SIZE_PORTRAIT * 8 + 4}vh;
    height: 3vh;
  }
  @media screen and (orientation: landscape) {
    width: ${Constants.GEM_SIZE_LANDSCAPE * 8 + 4}vw;
    height: 3vw;
  }
  justify-content: center;
`