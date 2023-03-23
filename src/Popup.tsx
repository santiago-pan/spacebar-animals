import React, { MouseEvent } from "react";

// New Popup component
interface PopupProps {
  title: string;
  buttonText: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Popup: React.FC<PopupProps> = ({ title, buttonText, onClick }) => {
  return (
    <div className="Popup">
      <div className="Popup-content">
        <h2>{title}</h2>
        <p>
          Use spacebar or touch the screen to advance to the next image
        </p>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;
