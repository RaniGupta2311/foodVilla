import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { ALL_RESTAURANT_API, AllRestaurantList } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
    const [searchText,setSearchText]=useState();
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    const filterRestaurant=(searchText,restaurants)=>{
        return allRestaurants.filter((restro)=>restro?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        
    }

    useEffect(()=>{
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const data=await fetch(ALL_RESTAURANT_API);
        const json=await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!allRestaurants) return null;
    // if(!filteredRestaurant?.length===0) return <h1>No Restaurant match your filter</h1>

    return allRestaurants.length===0 ? (<Shimmer/>) :(
        <div className="p-4 absolute top-24 bg-gray-100 w-[100%] min-h-[calc(100vh-6rem)]">
           <div className="w-[100%] text-center">
                <input 
                    className="border-[1px] border-gray-400 w-64 lg:w-[28rem] p-1 pl-2 pr-2 h-10 rounded-l-md  focus:outline-amber-200  text-gray-500"
                    type="text"
                    placeholder="Search a restaurant you want"
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="p-2 pl-3 pr-3 font-light text-white h-[41px] bg-amber-400 rounded-r-md"
                 onClick={()=>{
                    const data=filterRestaurant(searchText,allRestaurants)
                    setFilteredRestaurant(data)}
                 }>Search</button>
           </div>
           
           <div className="flex flex-wrap justify-center gap-6 p-2 mt-2">
                {filteredRestaurant.length===0?(<div className="">
                    <h1 className="text-lg md:text-xl">Sorry! No match found your filter.</h1>
                </div>):(filteredRestaurant.map((restro)=><Link to={"/restaurant/"+restro?.info?.id} key={restro?.info?.id}><RestaurantCard {...restro?.info}/></Link>))}
            </div>

        </div>
    )
}
export default Body;