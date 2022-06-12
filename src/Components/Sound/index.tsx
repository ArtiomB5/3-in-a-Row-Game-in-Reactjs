import React, { FC } from "react";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";
import { SoundStyled } from "./style";

type SoundPropsType = {
  isMuted: boolean;
  setMuted: (param: boolean) => void;
};

export const Sound: FC<SoundPropsType> = ({ isMuted, setMuted }) => {
  const clickHandler = () => {
    setMuted(!isMuted)
  };
  return (
    <SoundStyled onClick={clickHandler}>
      {isMuted && <GiSoundOn />}
      {!isMuted && <GiSoundOff />}
    </SoundStyled>
  );
};
