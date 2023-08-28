import RestaurantCard from "./RestaurantCard";
import { AllRestaurantList } from "../utils/Constants";
import { useContext } from "react";
import { searchContext } from "./Header";
import { useState } from "react";

const RestaurantList=()=>{
    const [restaurants,setRestaurants]=useState(AllRestaurantList);
    return (
        <div className="flex flex-wrap justify-center gap-6 p-2 mt-2">
        {restaurants.map((restro)=><RestaurantCard {...restro?.info} key={restro.info.id}/>)}
        </div>
        
    )
}
export default RestaurantList;