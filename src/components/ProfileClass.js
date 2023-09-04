import React from "react";
import SelfImage from "../utils/images/selfImage.jpg";
import LinkedIn from "../utils/images/linkedin.webp";
import Github from "../utils/images/github.webp";
import Gmail from "../utils/images/gmail.webp";
import { Link } from "react-router-dom";
import { GITHUB_USER_INFO_API } from "../utils/Constants";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                
            }
        }
        console.log("constructor");
    }
    componentDidUpdate(){
      console.log("componentDidUpdate");
    }
    async componentDidMount(){
        console.log("componentDidMount");
        this.timer=setInterval(()=>{
          console.log("Namaste Food");
        },1000)
        
        const data=await fetch(GITHUB_USER_INFO_API);
        const json=await data.json();
        // console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentWillUnmount(){
      console.log("componentWillUnmount");
      clearInterval(this.timer)
    }
    render(){
        console.log("render");
        const {name,avatar_url,bio,company,location}=this.state.userInfo;
        return (
            <div className="flex justify-center mt-5 mb-20">
            <div className="p-2 shadow-2xl w-[20rem] md:w-[24rem] xl:w-[25rem] flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold pt-3">About Me</h1>
              <img
                src={avatar_url}
                alt="self-image"
                className="rounded-[100%] w-40 h-40 p-2 mt-4 mb-2 shadow-sm"
              />
              <h2 className="font-medium text-lg text-gray-900 text-center">
                {name}
              </h2>
              <h2 className="font-light text-gray-700 mt-4 text-center">
                {bio}
              </h2>
              <h3 className="font-light text-gray-700 mt-1 text-center">
                {company}
              </h3>
              <h3 className="font-light text-gray-400 mt-1 text-center">
                {location}
              </h3>
              <div className="mt-3 mb-5 p-2 flex justify-center items-center gap-5">
                <Link to="https://www.linkedin.com/in/rani-gupta-366873198/">
                  <div className="w-14 h-14 bg-[#0551a9dc] rounded-[100%] hover:cursor-pointer">
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
          </div>)
    }
}
export default ProfileClass;