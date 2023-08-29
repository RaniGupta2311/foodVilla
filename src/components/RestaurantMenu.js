import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_MENU_API } from "../utils/Constants";
const RestaurantMenu=()=>{
    const [restaurantDetail,setRestaurantDetail]=useState([]);
    // read dynamic url
    const params=useParams();
    const {resId}=params
    // console.log(resId);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data=await fetch(RESTAURANT_MENU_API+resId);
        const json=await data.json();
        // console.log(json.data.cards);
        setRestaurantDetail(json.data.cards);
    }

    // const {name,cuisines,areaName,avgRating,sla,costForTwoMessage}=restaurantDetail[0].card.card.info;
    if(!restaurantDetail) return null;
    return (
        <div className="absolute top-24 bg-gray-100 w-[100%] min-h-[calc(100vh-6rem)]">
            {/* <h2>Restaurant Menu</h2> */}
            <div className="p-1 h-48 bg-gray-600 text-white flex justify-center items-center gap-4">
                <div className="flex justify-center items-center"><img className="h-[10rem] w-60 rounded-md" src={IMG_CDN_URL+restaurantDetail[0]?.card?.card?.info?.cloudinaryImageId}/></div>
                <div className="max-w-lg justify-between">
                    <h1 className="text-4xl">{restaurantDetail[0]?.card?.card?.info?.name}</h1>
                    <h1 className="text-md mt-1">{restaurantDetail[0]?.card?.card?.info?.cuisines.join(",")}</h1>
                    <h1 className="text-sm mt-1">{restaurantDetail[0]?.card?.card?.info?.areaName}</h1>
                    <div className="flex justify-left items-center gap-8 mt-3">
                        <p className="text-md"><span className={`text-lg ${restaurantDetail[0]?.card?.card?.info?.avgRating>=4 ?'text-green-600':'text-red-500'}`}>✪</span> {restaurantDetail[0]?.card?.card?.info?.avgRating}</p>
                        <p>{restaurantDetail[0]?.card?.card?.info?.sla.slaString}</p>
                        <p>{restaurantDetail[0]?.card?.card?.info?.costForTwoMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;