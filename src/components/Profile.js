import SelfImage from "../utils/images/selfImage.jpg";
import LinkedIn from "../utils/images/linkedin.webp";
import Github from "../utils/images/github.webp";
import Gmail from "../utils/images/gmail.webp";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="flex justify-center mt-5 mb-20">
      <div className="p-2 shadow-2xl w-[20rem] md:w-[24rem] xl:w-[25rem] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold pt-3">About Me</h1>
        <img
          src={SelfImage}
          alt="self-image"
          className="rounded-[100%] w-40 h-40 p-2 mt-4 mb-4 shadow-sm"
        />
        <h2 className="font-light text-gray-700 mt-4 text-center">
          React.js | JavaScript | ES6 | Redux | HTML5 | CSS3
        </h2>
        <h3 className="font-light text-gray-700 mt-1 text-center">
          Frontend Developer | Associate | Cognizant
        </h3>
        <div className="mt-3 mb-5 p-2 flex justify-center items-center gap-5">
          <Link to="https://www.linkedin.com/in/rani-gupta-366873198/">
            <div className="w-14 h-14 bg-[#0865cf] rounded-[100%] hover:cursor-pointer">
              <img src={LinkedIn} alt="linkedIn" className="rounded-[100%]" />
            </div>
          </Link>
          <Link to="https://github.com/RaniGupta2311">
            <div className="w-14 h-14 bg-black rounded-[100%] hover:cursor-pointer">
              <img src={Github} alt="github" className="rounded-[100%] p-1" />
            </div>
          </Link>
          <Link to="mailto:rani.gupta259@gmail.com">
            <div className="w-14 h-14 bg-[#db4d29] rounded-[100%] hover:cursor-pointer">
              <img src={Gmail} alt="gmail" className="rounded-[100%] p-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profile;
