import { MouseEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import ImageComponent from "./ImageComponent";
import Popup from "./Popup";

function App() {
  // const counter = useKeyCounter();
  const [showPopup, setShowPopup] = useState(true);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && (
        <Popup
          title="Spacebar Game"
          buttonText="Start"
          onClick={handleButtonClick}
        />
      )}
      {!showPopup && (
        <section className="App-section">
          <Game />
        </section>
      )}
    </div>
  );
}

function Game() {
  const counter = useKeyCounter();
  return (
    <section className="App-section">
      <ImageComponent index={counter} />
    </section>
  );
}

function useKeyCounter() {
  const [counter, setCounter] = useState<number>(1);

  const upHandler = useCallback((evt: KeyboardEvent) => {
    if (evt.key === " ") {
      setCounter((cnt) => (cnt === 109 ? 1 : cnt + 1));
    }
    if (evt.key === "ArrowLeft") {
      setCounter((cnt) => (cnt > 1 ? cnt - 1 : cnt));
    }
  }, []);

  const touchendHandler = useCallback((evt: TouchEvent) => {
    setCounter((cnt) => (cnt === 109 ? 1 : cnt + 1));
  }, []);

  useEffect(() => {
    // Preload the images
    const imageSources = Array.from(
      { length: 109 },
      (_, i) => `/images/nature/${i + 1}img.png`
    );
    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    window.addEventListener("keyup", upHandler);
    window.addEventListener("touchend", touchendHandler);
    return () => {
      window.removeEventListener("keyup", upHandler);
      window.removeEventListener("touchend", touchendHandler);
    };
  }, [upHandler, touchendHandler]);

  return counter;
}

export default App;
