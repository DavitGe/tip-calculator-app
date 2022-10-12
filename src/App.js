import React, { useState, useEffect } from "react";

import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";

function App() {
  const [bill, setBill] = useState(""); //bill input value
  const [amount, setAmount] = useState(""); //custom tip input value
  const [people, setPeople] = useState("0"); //people input value

  const [tip, setTip] = useState(0); //Tip% (from buttons or amount hook)

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Number(people) > 0 && Number(bill) > 0) {
      console.log("bill", bill);
      setTipAmount(((Number(bill) / 100) * Number(tip)) / Number(people));
      setTotal(
        Number(bill) / Number(people) +
          ((Number(bill) / 100) * Number(tip)) / Number(people)
      );
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, people, tip]);
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
      setTip(e.target.value);
    }
  };

  const activeAmountInput = (e) => {
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.classList.toggle("active");
    }
    e.currentTarget.classList.toggle("active");
    setTip(e.target.value);
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
          //replace(/0/g, '')
          setPeople(e.target.value.slice(1, e.target.value.length));
        } else {
          if (people === "0") {
            setPeople(e.target.value.charAt(0));
          } else {
            setPeople(e.target.value);
          }
        }
      } else {
        setPeople("0");
      }
    }
  };

  const resetClickHandler = () => {
    setBill("");
    setAmount("");
    setPeople("0");
    setTip(0);
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.classList.toggle("active");
    }
  };

  const pplInputStyles =
    "rounded text-right w-full bg-input text-dark pr-4 h-12 outline-none" +
    (people === "0" ? " outline-[2px] outline-error" : "");
  const pplErrorStyles =
    "text-common text-error text-base mb-[6px]" +
    (people !== "0" ? " hidden" : "");

  const tipBtnStyles =
    "w-[117px] mr-[14px] mobile:mr-0 mobile:w-[47%] h-12 bg-dark rounded text-white mt-4 hover:bg-light hover:text-dark";
  return (
    <div className="App bg-bgColor h-screen w-full laptop:flex laptop:items-center laptop:justify-center">
      <div className="laptop:mb-10 flex flex-col items-center rounded-lg mobile:h-full">
        <img src={logo} alt="SPLITTER" className="mb-20 mobile:mt-12" />
        <div className="bg-white flex flex-row w-[920px] h-[481px] p-8 pl-12 rounded-lg mobile:w-screen mobile:h-full mobile:rounded-t-lg mobile:flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="text-common text-base mb-[6px]">Bill</span>
              <div className="relative laptop:w-[379px] mobile:w-full">
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
            <div className="mt-10 mobile:mt-8">
              <span className="text-common text-base mb-[6px]">
                Select Tip %
              </span>
              <div className="mobile:flex flex-wrap mobile:justify-between w-[379px] mobile:w-full">
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
                {/* <br /> */}
                <button onClick={tipBtnClick} className={tipBtnStyles}>
                  25%
                </button>
                <button onClick={tipBtnClick} className={tipBtnStyles}>
                  50%
                </button>
                <input
                  className="pr-2 w-[117px] mobile:w-[47%] h-12 bg-input rounded text-dark placeholder:text-[#547878] mobile:placeholder:text-right placeholder:text-left text-right mt-4 laptop:pl-[14px] outline-none"
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
              <div className="relative w-[379px] mobile:w-full mobile:mb-8">
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
          <div className="flex-col justify-between w-[413px] h-[417px] mobile:w-full mobile:h-min bg-dark flex rounded-md laptop:ml-12 laptop:p-10 mobile:px-[22px] mobile:pt-[37px] mobile:pb-6">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-base text-white">Tip Amount</span>
                  <span className="text-sm mobile:text-mobSm text-[#7F9D9F]">
                    / Person
                  </span>
                </div>
                <span className="text-light text-xl mobile:text-mobXl">
                  ${tipAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-row justify-between items-center mt-6">
                <div className="flex flex-col">
                  <span className="text-base text-white">Total</span>
                  <span className="text-sm mobile:text-mobSm text-[#7F9D9F]">
                    / Person
                  </span>
                </div>
                <span className="text-light text-xl mobile:text-mobXl">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="mobile:mt-[33px] bg-light w-full h-12 rounded text-dark hover:bg-[#9FE8DF] active:bg-[#0D686D]"
              onClick={resetClickHandler}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
