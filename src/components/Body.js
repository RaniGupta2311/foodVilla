import RestaurantList from "./RestaurantList";
import { searchContext } from "./Header";
import { useState } from "react";
const Body=()=>{
    const [searchText,setSearchText]=useState();
    return (
        <div className="p-4 absolute top-24 bg-gray-100">
           <div className="w-[100%] text-center">
                <input 
                    className="border-[1px] border-gray-400 w-64 lg:w-[28rem] p-1 pl-2 pr-2 h-10 rounded-l-md"
                    type="text"
                    placeholder="Search a restaurant you want"
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="p-2 pl-3 pr-3 font-light text-white h-10 bg-amber-400 rounded-r-md">Search</button>
           </div>
        <RestaurantList/>
        </div>
    )
}
export default Body;