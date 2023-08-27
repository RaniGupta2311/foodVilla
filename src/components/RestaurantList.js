import RestaurantCard from "./RestaurantCard";
import { AllRestaurantList } from "../utils/Constants";
const RestaurantList=()=>{
    return (
        <div className="flex flex-wrap justify-center gap-6 p-2">
        {AllRestaurantList.map((restro)=><RestaurantCard {...restro?.info}/>)}
        </div>
        
    )
}
export default RestaurantList;