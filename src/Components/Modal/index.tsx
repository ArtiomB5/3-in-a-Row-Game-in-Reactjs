import { ModalCloseStyled, ModalContentStyled, ModalStyled, ManualButtonStyled } from "./style";
import { useState } from "react";

export const Modal = () => {
  const [visibility, setVisibility] = useState(true);
  return (
    <div>
      <ManualButtonStyled onClick={() => setVisibility(true)}>Manual</ManualButtonStyled>
      <ModalStyled vis={visibility}>
        <ModalContentStyled>
          <ModalCloseStyled onClick={() => setVisibility(false)}>&times;</ModalCloseStyled>
          <p>1. Click to select the gem you want to move.</p>
          <p>2. Click to select the gem where you want to place the gem from step 1.</p>
          <hr/>
          <p>OST: Mystery Orientale by  FSM Team</p>
        </ModalContentStyled>
      </ModalStyled>
    </div>
  );
};
