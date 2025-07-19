import Input from "./components/Input"
import { useState } from "react"
import useCurrency from "./hooks/useCurrency"
const App = () => {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')

  const currencyOptions = [
    "EUR",
    "USD",
    "JPY",
    "BGN",
    "CZK",
    "DKK",
    "GBP",
    "HUF",
    "PLN",
    "RON",
    "SEK",
    "CHF",
    "ISK",
    "NOK",
    "HRK",
    "RUB",
    "TRY",
    "AUD",
    "BRL",
    "CAD",
    "CNY",
    "HKD",
    "IDR",
    "ILS",
    "INR",
    "KRW",
    "MXN",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "ZAR",
  ];

  const {data, loading, error} = useCurrency(fromCurrency, toCurrency)

  const convertedCurrency = data?.[toCurrency] ? (data[toCurrency] * amount).toFixed(2) : ""

  const handleSwap = ()=>{
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg)",
      }}
      className="bg-cover bg-center h-screen flex items-center justify-center"
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20">
        <h1
          style={{ color: "#B87333" }}
          className=" text-2xl font-bold text-center text-gray-800 mb-2"
        >
          Currency Converter
        </h1>

        <Input
          label="From"
          amount={amount}
          currencyOptions={currencyOptions}
          onAmountChange={setAmount}
          onCurrencyChange={setFromCurrency}
          selectedCurrency={fromCurrency}
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/30 text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <div className="text-center">
          <button
            onClick={handleSwap}
            className="bg-copper hover:bg-copper/80 text-white p-3 rounded-full shadow-md"
          >
            🔄
          </button>
        </div>

        <Input
          label="To"
          amount={convertedCurrency}
          currencyOptions={currencyOptions}
          onCurrencyChange={setToCurrency}
          selectedCurrency={toCurrency}
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/30 text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        {loading && (
          <p className="text-center text-gray-600">Loading exchange rate...</p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
      </div>
    </div>
  );
}

export default App