import "./styles.css";
import React, { useState } from "react";

const heater1Audio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
);
const heater2Audio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
);
const heater3Audio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
);
const heater4Audio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
);
const clapAudio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
);
const kickAudio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
);
const kicknhatAudio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
);
const openhhAudio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
);
const closedhhAudio = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
);

export default function Machine() {
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(1);
  const [display, setDisplay] = useState("OFF");
  const [h1active, seth1Active] = useState(false);
  const [h2active, seth2Active] = useState(false);
  const [h3active, seth3Active] = useState(false);
  const [h4active, seth4Active] = useState(false);
  const [cactive, setcActive] = useState(false);
  const [kactive, setkActive] = useState(false);
  const [knhactive, setknhActive] = useState(false);
  const [ohhactive, setohhActive] = useState(false);
  const [chhactive, setchhActive] = useState(false);

  function heater1() {
    if (power) {
      heater1Audio.volume = volume;
      heater1Audio.play();
      setDisplay("Heater 1");
      seth1Active(true);
      setTimeout(() => seth1Active(false), 200);
    }
  }
  function heater2() {
    if (power) {
      heater2Audio.volume = volume;
      heater2Audio.play();
      setDisplay("Heater 2");
      seth2Active(true);
      setTimeout(() => seth2Active(false), 200);
    }
  }
  function heater3() {
    if (power) {
      heater3Audio.volume = volume;
      heater3Audio.play();
      setDisplay("Heater 3");
      seth3Active(true);
      setTimeout(() => seth3Active(false), 200);
    }
  }
  function heater4() {
    if (power) {
      heater4Audio.volume = volume;
      heater4Audio.play();
      setDisplay("Heater 4");
      seth4Active(true);
      setTimeout(() => seth4Active(false), 200);
    }
  }
  function clap() {
    if (power) {
      clapAudio.volume = volume;
      clapAudio.play();
      setDisplay("Clap");
      setcActive(true);
      setTimeout(() => setcActive(false), 200);
    }
  }
  function kick() {
    if (power) {
      kickAudio.volume = volume;
      kickAudio.play();
      setDisplay("Kick");
      setkActive(true);
      setTimeout(() => setkActive(false), 200);
    }
  }
  function kicknhat() {
    if (power) {
      kicknhatAudio.volume = volume;
      kicknhatAudio.play();
      setDisplay("Kick n' hat");
      setknhActive(true);
      setTimeout(() => setknhActive(false), 200);
    }
  }
  function openhh() {
    if (power) {
      openhhAudio.volume = volume;
      openhhAudio.play();
      setDisplay("Open HH");
      setohhActive(true);
      setTimeout(() => setohhActive(false), 200);
    }
  }
  function closedhh() {
    if (power) {
      closedhhAudio.volume = volume;
      closedhhAudio.play();
      setDisplay("Closed HH");
      setchhActive(true);
      setTimeout(() => setchhActive(false), 200);
    }
  }

  function play(event) {
    if (event.key === "q") {
      heater1();
    }
    if (event.key === "w") {
      heater2();
    }
    if (event.key === "e") {
      heater3();
    }
    if (event.key === "a") {
      heater4();
    }
    if (event.key === "s") {
      clap();
    }
    if (event.key === "d") {
      kick();
    }
    if (event.key === "z") {
      kicknhat();
    }
    if (event.key === "x") {
      openhh();
    }
    if (event.key === "c") {
      closedhh();
    }
  }

  document.addEventListener("keydown", play);
  function powerChange() {
    if (power) {
      console.log("turning off...");
      setPower(false);
      setDisplay("OFF");
    } else {
      console.log("turning on...");
      setPower(true);
      setDisplay(".......................");
    }
  }
  return (
    <div className="kitoutline">
      <div className="kitkeys">
        <div className={`kit-key ${h1active && "btn-warning"}`} id="heater1">
          <button onClick={heater1}>Q</button>
        </div>
        <div className={`kit-key ${h2active && "btn-warning"}`} id="heater2">
          <button onClick={heater2}>W</button>
        </div>
        <div className={`kit-key ${h3active && "btn-warning"}`} id="heater3">
          <button onClick={heater3}>E</button>
        </div>
        <div className={`kit-key ${h4active && "btn-warning"}`} id="heater4">
          <button onClick={heater4}>A</button>
        </div>
        <div className={`kit-key ${cactive && "btn-warning"}`} id="clap">
          <button onClick={clap}>S</button>
        </div>
        <div className={`kit-key ${kactive && "btn-warning"}`} id="kick">
          <button onClick={kick}>D</button>
        </div>
        <div className={`kit-key ${knhactive && "btn-warning"}`} id="kicknhat">
          <button onClick={kicknhat}>Z</button>
        </div>
        <div className={`kit-key ${ohhactive && "btn-warning"}`} id="openhh">
          <button onClick={openhh}>X</button>
        </div>
        <div className={`kit-key ${chhactive && "btn-warning"}`} id="closedhh">
          <button onClick={closedhh}>C</button>
        </div>
      </div>
      <div className="features">
        <div id="power">
          Power
          <button
            onClick={powerChange}
            id="powerlight"
            style={{
              backgroundColor: power ? "lawngreen" : "green"
            }}
          ></button>
        </div>
        <div id="display">{display}</div>
        <div id="volume">
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
          {Math.floor(volume * 100)}%
        </div>
      </div>
    </div>
  );
}
