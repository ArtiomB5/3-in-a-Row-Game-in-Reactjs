import styled, {keyframes} from 'styled-components';
import {ColumnFlexMixin, RowFlexMixin} from "../../Assets/Styles/mixins";
import * as Constants from "../../Services/Constants";

const SlideInDownAnimation = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const MainColumn = styled.div`
  ${ColumnFlexMixin};
`
export const SecondColumn = styled.div`
  ${ColumnFlexMixin}
`
export const SecondColumnScoreBlock = styled.div`
  width: 100%;
  @media screen and (orientation: portrait) {
    ${RowFlexMixin};
  }
  @media screen and (orientation: landscape) {
    ${RowFlexMixin};
  }
`

export const Gem = styled.div<{ background: string, isSelected: boolean }>`
  @media screen and (orientation: portrait) {
    width: ${Constants.GEM_SIZE_PORTRAIT - 1}vh;
    height: ${Constants.GEM_SIZE_PORTRAIT - 1}vh;
    border: ${props => props.isSelected ? '0.5vh solid #48137F' : '0.5vh solid transparent'};
  }
  @media screen and (orientation: landscape) {
    width: ${Constants.GEM_SIZE_LANDSCAPE - 1}vw;
    height: ${Constants.GEM_SIZE_LANDSCAPE - 1}vw;
    border: ${props => props.isSelected ? '0.5vw solid #48137F' : '0.5vw solid transparent'};
  }
  background: ${props => props.background};
  border-radius: 50%;
  animation-name: ${SlideInDownAnimation};
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-delay: 0.05s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  display: block;
`
