import type { MouseEventHandler } from "react";
import "../styles/MainButton.scss";

interface buttonInterface {
  buttonFunction: MouseEventHandler<HTMLButtonElement>
}


const MainButton = ({buttonFunction}: buttonInterface) => {
  return (
    <div>
      <button className="main_button" onClick={buttonFunction}>Что посмотреть?</button>
    </div>
  );
};

export default MainButton;
