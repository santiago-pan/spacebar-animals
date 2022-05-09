import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const counter = useKeyCounter();
  return (
    <div className="App">
      <section className="App-section">
        <ImageComponent index={counter} />
      </section>
    </div>
  );
}

function ImageComponent(props: { index: number }) {
  return <img alt="animal" src={`/images/nature/${props.index}img.png`} />;
}

function useKeyCounter() {
  const [counter, setCounter] = useState<number>(1);
  useEffect(() => {
    const upHandler = (evt: KeyboardEvent) => {
      if (evt.key === " ") {
        setCounter((cnt) => (cnt === 109 ? 1 : cnt + 1));
      }
      if (evt.key === "ArrowLeft") {
        setCounter((cnt) => (cnt > 1 ? cnt - 1 : cnt));
      }
    };
    const touchendHandler = (evt: TouchEvent) => {
      setCounter((cnt) => (cnt === 109 ? 1 : cnt + 1));
    };
    window.addEventListener("keyup", upHandler);
    window.addEventListener("touchend", touchendHandler);
    return () => {
      window.removeEventListener("keyup", upHandler);
      window.removeEventListener("touchend", touchendHandler);
    };
  }, []);
  return counter;
}

export default App;
