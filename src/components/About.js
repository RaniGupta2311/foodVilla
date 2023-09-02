import { useState } from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import Burger from "../utils/images/Burger.jpeg";
const About = () => {
  const [show, setShow] = useState("true");
  return (
    <div className="p-4 absolute top-24 w-[100%] min-h-[calc(100vh-6rem)] bg-white flex flex-col items-center justify-center">
      <button className="mt-4 mb-4 bg-green-800 p-3 rounded-lg text-white font-medium text-lg hover:bg-amber-700"
      onClick={()=>{
        show==="true"? setShow("false"):setShow("true")
      }}>
        {show==="true"?"Hide my Profile":"Show my Profile"}
      </button>
      {show==="true" ? <div><Profile /></div> : null}
      <div className="flex flex-col items-center lg:flex-row gap-5 lg:justify-between pl-4 pr-4 lg:pl-8 lg:pr-8 xl:pl-20 xl:pr-20">
        <div className="w-96 p-4 lg:w-[38rem]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600 mb-2 lg:mb-4">
            Welcome to
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600 mb-2 lg:mb-4">
            The world of
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl bg-amber-400 text-white rounded-lg p-2 font-semibold mb-2 lg:mb-4 inline-block">
            Tasty & Fresh Food
          </h1>
          <p className="text-sm md:text-md xl:text-lg font-semibold">
            "Better you will feel if you eat a{" "}
            <span className="text-lg"> 🙏🏽 </span>
            <span className="bg-amber-300 text-white p-1 rounded-lg">
              Food
            </span>{" "}
            healthy meal"
          </p>
        </div>
        <div>
          <img src={Burger} alt="burger" className="bg-white" />
        </div>
      </div>

      <Outlet />
    </div>
  );
};
export default About;
