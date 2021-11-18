import "./App.css";
import React, { useState, useEffect } from "react";

let colors = ["red", "blue", "green", "purple", "yellow"];

function App() {
  const [lightConfigArray, setLightConfigArray] = useState([
    { light1: "black", light2: "black", light3: "black" },
    // { light1: "blue", light2: "blue", light3: "blue" },
    // { light1: "red", light2: "red", light3: "red" },
  ]);
  const [lightConfigPosition, setLightConfigPosition] = useState(0);

  const createRandomConfig = () => {
    const randNum = Math.floor(Math.random() * colors.length);
    const randNum2 = Math.floor(Math.random() * colors.length);
    const randNum3 = Math.floor(Math.random() * colors.length);

    const randLightObj = {
      light1: colors[randNum],
      light2: colors[randNum2],
      light3: colors[randNum3],
    };
    // console.log("randLightObj: ", randLightObj);
    return randLightObj;
  };

  const appendRand = () => {
    let randomState = createRandomConfig();
    setLightConfigArray((prevState) => [...prevState, randomState]);
  };

  const prependRand = () => {
    let randomState = createRandomConfig();
    setLightConfigArray((prevState) => [randomState, ...prevState]);
  };

  const fwdHandler = () => {
    if (lightConfigPosition === lightConfigArray.length - 1) {
      appendRand();
      setLightConfigPosition((prevState) => prevState + 1);
    } else {
      setLightConfigPosition((prevState) => prevState + 1);
    }
  };

  const bckHandler = () => {
    if (lightConfigPosition === 0) {
      prependRand();
    } else {
      setLightConfigPosition((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    console.log("master array: ", lightConfigArray);
  }, [lightConfigArray]);

  return (
    <div className="App">
      <div className="btn-prnt">
        <div
          onClick={() => {
            bckHandler();
          }}
        >
          Backward
        </div>
        <div
          onClick={() => {
            fwdHandler();
          }}
        >
          Forwards
        </div>
        {/* <div>{lightConfigPosition}</div> */}
      </div>

      <div className="light-prnt">
        <div
          style={{
            border: `2px solid ${lightConfigArray[lightConfigPosition]["light1"]}`,
          }}
        >
          Light 1
        </div>
        <div
          style={{
            border: `2px solid ${lightConfigArray[lightConfigPosition]["light2"]}`,
          }}
        >
          Light 2
        </div>
        <div
          style={{
            border: `2px solid ${lightConfigArray[lightConfigPosition]["light3"]}`,
          }}
        >
          Light 3
        </div>
      </div>
    </div>
  );
}

export default App;
