import styled from "styled-components";
import {BackgroundImageMixin} from "./mixins";
import scene from '../Images/Tileset/PNG/scene.png';

export const SceneCover = styled.div`
  ${BackgroundImageMixin};
  background-image: url("${scene}");
  @media screen and (orientation: portrait) {
    padding: ${3}vh;
  }
  @media screen and (orientation: landscape) {
    padding: ${3}vw;
  }
`