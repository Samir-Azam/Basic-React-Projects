import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      const random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2500);
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="min-h-[600px] my-[50px] rounded-4xl flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-800">
      <div className="w-full max-w-lg sm:max-w-xl bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col space-y-6">
        {/* Password Generator */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            className="w-full bg-gray-100 border-2 border-gray-300 rounded-lg p-4 text-xl font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Generated Password"
            readOnly
            value={password}
          />
          <div className="relative">
            <button
              className="w-full sm:w-auto bg-amber-400 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-amber-500 transition duration-300"
              onClick={copyPassword}
            >
              Copy
            </button>
            
            {showCopyNotification && (
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-lg shadow-lg opacity-90">
                Password copied!
              </div>
            )}
          </div>
        </div>

        {/* Settings */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-800 font-medium space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Length Slider */}
          <div className="flex items-center space-x-4">
            <label htmlFor="letters" className="text-lg">
              Length: {length}
            </label>
            <input
              value={length}
              id="letters"
              min={6}
              max={50}
              type="range"
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-32 h-2 bg-gray-300 rounded-lg cursor-pointer"
            />
          </div>

          {/* Options */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="numbers"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="h-5 w-5 text-blue-500 focus:ring-blue-500"
                aria-label="Include numbers"
              />
              <label htmlFor="numbers" className="text-lg">
                Numbers
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="spCharacter"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="h-5 w-5 text-blue-500 focus:ring-blue-500"
                aria-label="Include special characters"
              />
              <label htmlFor="spCharacter" className="text-lg">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
