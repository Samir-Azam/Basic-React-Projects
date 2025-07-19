import { useId } from "react"
const Input = ({
    label,
    amount = 0,
    onAmountChange,
    selectedCurrency = 'USD',
    currencyOptions = [],
    onCurrencyChange,
    className = ''
}) => {

    const id = useId()

  return (
    <div
      className={`bg-copper-300 p-4 rounded-lg text-sm flex flex-col sm:flex-row gap-4 shadow-md ${className}`}
    >
      <div className="sm:w-1/2">
        <label className="block mb-1 text-gray-700 font-semibold" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type="number"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          placeholder="Enter amount"
          className="w-full py-2 px-3 bg-gray-100 text-gray-800 rounded-md border border-gray-400 focus:border-gold-400 focus:ring focus:ring-gold-200"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-semibold">
          Currency
        </label>
        <select
          name=""
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          className="w-full py-2 px-3 bg-gray-100 text-gray-800 rounded-md border border-gray-400 focus:border-gold-400 focus:ring focus:ring-gold-200 cursor-pointer"
          id=""
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input