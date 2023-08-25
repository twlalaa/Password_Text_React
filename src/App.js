//Hooks

import { useState } from "react";

// Icons
import { AiFillLock } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const App = () => {
  const [inputType, setInputType] = useState("password");

  const changeState = (e) => {
    e.preventDefault();
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-80 relative">
        <input
          className="text-blue-500  w-full p-2 focus:outline-none ring-1 focus:ring-2 ring-blue-500 rounded pl-10 placeholder:text-blue-500 font-poppins"
          type={inputType}
          placeholder="Password"
        />
        <AiFillLock className="fill-blue-500 absolute top-1/2 left-2 -translate-y-1/2 w-5 h-5" />
        <button
          onClick={changeState}
          className=" absolute top-1/2 right-2 -translate-y-1/2"
        >
          {inputType === "text" && (
            <BiShowAlt className="fill-blue-500  w-5 h-5" />
          )}
          {inputType === "password" && (
            <BiHide className="fill-blue-500  w-5 h-5" />
          )}
        </button>
      </form>
    </div>
  );
};

export default App;
