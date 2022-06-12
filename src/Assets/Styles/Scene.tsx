import styled from "styled-components";
import * as Constants from '../../Services/Constants';

const scenePortrait = Constants.GEM_SIZE_PORTRAIT * 8;
const sceneLandscape = Constants.GEM_SIZE_LANDSCAPE * 8;

export const Scene = styled.div`
  @media screen and (orientation: portrait) {
    width: ${scenePortrait}vh;
    height: ${scenePortrait}vh;
  }
  @media screen and (orientation: landscape) {
    width: ${sceneLandscape}vw;
    height: ${sceneLandscape}vw;
  }
  display: flex;
  flex-wrap: wrap;
`