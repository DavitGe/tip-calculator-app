import React, { useState } from "react";

import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";

function App() {
  const [bill, setBill] = useState("");
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("0");
  const [tip, setTip] = useState(0);

  const re = /^\d*\.?\d+$/;
  const billInputHandler = (e) => {
    if (
      (re.test(e.target.value) && e.target.value !== "0") ||
      e.target.value === "" ||
      (e.target.value.charAt(e.target.value.length - 1) === "." &&
        !e.target.value.slice(0, -1).includes("."))
    ) {
      setBill(e.target.value);
    }
  };

  const amountInputHandler = (e) => {
    if (
      (re.test(e.target.value) && e.target.value !== "0") ||
      e.target.value === "" ||
      (e.target.value.charAt(e.target.value.length - 1) === "." &&
        !e.target.value.slice(0, -1).includes("."))
    ) {
      setAmount(e.target.value);
    }
  };

  const activeAmountInput = (e) => {
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.classList.toggle("active");
    }
    e.currentTarget.classList.toggle("active");
  };

  const tipBtnClick = (e) => {
    setTip(Number(e.target.innerText.slice(0, -1)));
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.classList.toggle("active");
    }
    e.currentTarget.classList.toggle("active");
  };

  const peopleInputHandler = (e) => {
    if (
      (re.test(e.target.value) && e.target.value !== "0") ||
      e.target.value === ""
    ) {
      if (e.target.value !== "") {
        if (e.target.value.charAt(0) === "0") {
          setPeople(e.target.value.slice(1, e.target.value.length));
        } else {
          setPeople(e.target.value);
        }
      } else {
        setPeople("0");
      }
    }
  };

  const pplInputStyles =
    "rounded text-right w-full bg-input text-dark pr-4 h-12 outline-none" +
    (people === "0" ? " outline-[2px] outline-error" : "");
  const pplErrorStyles =
    "text-common text-error text-base mb-[6px]" +
    (people !== "0" ? " hidden" : "");

  const tipBtnStyles =
    "w-[117px] mr-[14px] h-12 bg-dark rounded text-white mt-4 hover:bg-light hover:text-dark";
  return (
    <div className="App bg-bgColor h-screen w-full flex items-center justify-center">
      <div className="mb-10 flex flex-col items-center rounded-lg">
        <img src={logo} alt="SPLITTER" className="mb-20" />
        <div className="bg-white flex flex-row w-[920px] h-[481px] p-8 pl-12">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="text-common text-base mb-[6px]">Bill</span>
              <div className="relative w-[379px]">
                <img
                  src={dollar}
                  alt="$"
                  className="absolute left-5 top-4 w-[10px] h-4 "
                />
                <input
                  placeholder="0"
                  className="rounded text-right w-full bg-input text-dark pr-4 h-12"
                  value={bill}
                  onChange={billInputHandler}
                />
              </div>
            </div>
            <div className="mt-10">
              <span className="text-common text-base mb-[6px]">
                Select Tip %
              </span>
              <div className="flex flex-wrap  w-[379px]">
                <button onClick={tipBtnClick} className={tipBtnStyles}>
                  5%
                </button>
                <button onClick={tipBtnClick} className={tipBtnStyles}>
                  10%
                </button>
                <button
                  onClick={tipBtnClick}
                  className={tipBtnStyles + " mr-0"}
                >
                  15%
                </button>
                <br />
                <button onClick={tipBtnClick} className={tipBtnStyles}>
                  25%
                </button>
                <button onClick={tipBtnClick} className={tipBtnStyles}>
                  50%
                </button>
                <input
                  className="pr-2 w-[117px] h-12 bg-input rounded text-dark placeholder:text-[#547878] placeholder:text-left text-right mt-4 pl-[14px] outline-none"
                  placeholder="Custom"
                  value={amount}
                  onChange={amountInputHandler}
                  onClick={activeAmountInput}
                />
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className="flex flex-row justify-between w-full">
                <span className="text-common text-base mb-[6px]">
                  Number of People
                </span>
                <span className={pplErrorStyles}>Can't be zero</span>
              </div>
              <div className="relative w-[379px]">
                <img
                  src={person}
                  alt="P"
                  className="absolute left-5 top-4 w-[14px] h-4 "
                />
                <input
                  placeholder="0"
                  className={pplInputStyles}
                  value={people}
                  onChange={peopleInputHandler}
                />
              </div>
            </div>
          </div>
          <div className="w-[413px] h-[417px] bg-dark flex rounded-md ml-12">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
