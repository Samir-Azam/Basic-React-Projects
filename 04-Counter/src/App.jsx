import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCounter(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 px-4">
      <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-md text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Counter:&nbsp;
          <span
            className={`${
              counter === 0 ? "text-red-500" : "text-green-600"
            } transition`}
          >
            {counter}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={increment}
            className="border border-black  bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all shadow-md w-full sm:w-auto"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            disabled={counter === 0}
            className={`${
              counter === 0
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            } border border-black text-white px-6 py-2 rounded-lg transition-all shadow-md w-full sm:w-auto`}
          >
            Decrement
          </button>

          <button
            onClick={reset}
            disabled={counter === 0}
            className={`${
              counter === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-700 hover:bg-gray-800"
            } border border-black text-white px-6 py-2 rounded-lg transition-all shadow-md w-full sm:w-auto `}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
