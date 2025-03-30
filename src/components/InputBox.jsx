import React from "react";

const InputBox = ({
  label,
  amount,
  onAmoutChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amoutDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  return (
    <section
      className={`${className} bg-white/20 p-4 rounded-xl text-sm flex backdrop-blur-md shadow-lg`}
    >
      <div className="w-1/2">
        <label className="text-white/70 mb-2 inline-block">{label}</label>
        <input
          type="number"
          className="w-full bg-transparent py-2 px-3 rounded-md border border-white/30 text-white outline-none"
          placeholder="0"
          disabled={amoutDisabled}
          value={amount || ""}
          onChange={(e) =>
            onAmoutChange && onAmoutChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/70 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-md p-2 bg-white/30 text-white outline-none cursor-pointer "
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency} className="text-black ">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default InputBox;
