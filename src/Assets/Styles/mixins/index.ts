import {css} from 'styled-components';
import * as CONSTANTS from '../../../Services/Constants';

export const ColumnFlexMixin = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const RowFlexMixin = css`
  ${ColumnFlexMixin};
  flex-direction: row;
`
export const BackgroundImageMixin = css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const ButtonMixin = css<{url: string}>`
  @media screen and (orientation: portrait) {
    height: ${CONSTANTS.BUTTON_HEIGHT}vh;
    width: ${CONSTANTS.BUTTON_HEIGHT * 3.2}vh;
    margin: ${CONSTANTS.BUTTON_HEIGHT - 3}vh;
  }
  @media screen and (orientation: landscape) {
    height: ${CONSTANTS.BUTTON_HEIGHT}vw;
    width: ${CONSTANTS.BUTTON_HEIGHT * 3.2}vw;
    margin: ${CONSTANTS.BUTTON_HEIGHT - 3}vw;
  }
  background-image: ${props => `url(${props.url})`};
  ${BackgroundImageMixin};
  ${ColumnFlexMixin};
  color: #fff;
`