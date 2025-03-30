import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-blue-900 via-purple-700 to-black">
      <div className="w-full max-w-lg mx-auto border border-white/20 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-2xl">
        <h1 className="text-center text-3xl font-semibold text-white mb-5">Currency Converter</h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            currencyOptions={options}
            amount={amount}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmoutChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />
          <div className="relative w-full flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-md transform transition-transform hover:scale-110"
            >
              <FaExchangeAlt />
            </button>
          </div>
          <InputBox
            label="To"
            currencyOptions={options}
            amount={convertedAmount}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amoutDisabled
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white px-4 py-3 rounded-lg font-medium transition-all"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
