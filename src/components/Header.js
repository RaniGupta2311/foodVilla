// import Logo from "../utils/images/images";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
const Title=()=>{
    return (
        <div className="w-24 h-24 flex justify-center items-center">
            <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jztgjfG6PTf2pgEu0ycmof2syvuQ40a8bw&usqp=CAU" alt="logo" className="rounded-full"/></a>
        </div>
    )
}
const Header=()=>{
   const isOnline=useOnline();
    return (
        <div className="h-24 w-[100%] flex justify-between items-center bg-amber-400 shadow-xl fixed top-0 z-50 pl-1 pr-1 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
            <Title/>
            <div>
                <ul className="flex md:gap-3 xl:gap-5 text-white text-lg font-semibold tracking-wide md:tracking-widest ">
                    <Link to="/"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Home</li></Link>
                    <Link to="/about"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">About</li></Link>
                    <Link to="/contact"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Contact</li></Link>
                    <Link to="/cart"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Cart</li></Link>
                    <Link to="/login">
                        <li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">
                        Login<span>{isOnline?"✅":"🛑"}</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Header;