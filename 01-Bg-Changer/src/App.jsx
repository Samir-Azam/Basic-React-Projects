import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("slategray");
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full flex items-end h-screen justify-center "
    >
      <div className="flex flex-wrap justify-around items-center  bg-white mb-[20px] rounded-2xl shadow-lg">
        <button
          onClick={() => setColor("#0288D1 ")}
          className="w-[80px] m-[30px] p-1.5 rounded-4xl bg-sky-800"
        >
          Sky
        </button>
        <button
          onClick={() => setColor("#00796B")}
          className="w-[80px] m-[30px] p-1.5 rounded-4xl bg-teal-800"
        >
          Teal
        </button>
        <button
          onClick={() => setColor("#FF8F00")}
          className="w-[80px] m-[30px] p-1.5 rounded-4xl bg-amber-800"
        >
          Amber
        </button>
        <button
          onClick={() => setColor("#2E7D32")}
          className="w-[80px] m-[30px] p-1.5 rounded-4xl bg-green-800"
        >
          Green
        </button>
        <button
          onClick={() => setColor("#1565C0")}
          className="w-[80px] m-[30px] p-1.5 rounded-4xl bg-blue-800"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("#C70000")}
          className="w-[80px] m-[30px] p-1.5 rounded-4xl bg-red-800"
        >
          Red
        </button>
      </div>
    </div>
  );
};

export default App;
