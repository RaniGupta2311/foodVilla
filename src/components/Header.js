// import Logo from "../utils/images/images";
import { Link } from "react-router-dom"
const Title=()=>{
    return (
        <div className="w-24 h-24 flex justify-center items-center">
            <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jztgjfG6PTf2pgEu0ycmof2syvuQ40a8bw&usqp=CAU" alt="logo" className="rounded-full"/></a>
        </div>
    )
}
const Header=()=>{
   
    return (
        <div className="h-24 w-[100%] flex justify-between items-center bg-amber-400 pr-3 sm:pr-8 sm:pl-2 md:pr-4 lg:pr-8 shadow-xl fixed top-0 z-50">
            <Title/>
            <div>
                <ul className="flex gap-1 sm:gap-5 text-white text-lg font-semibold tracking-wide md:tracking-widest ">
                    <Link to="/"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Home</li></Link>
                    <Link to="/about"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">About</li></Link>
                    <Link to="/contact"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Contact</li></Link>
                    <Link to="/cart"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Cart</li></Link>
                    <Link to="/login"><li className="hover:bg-gray-400 pl-2 pr-2 pt-1 pb-1 rounded-md">Login</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default Header;