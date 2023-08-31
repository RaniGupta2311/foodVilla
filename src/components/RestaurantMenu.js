import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_MENU_API } from "../utils/Constants";
import FoodItemCard from "./FoodItemCard";
import ShimmerMenu from "./ShimmerMenu";
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
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info);
        setRestaurantDetail(json.data.cards);
    }

    // const {name,cuisines,areaName,avgRating,sla,costForTwoMessage}=restaurantDetail[0].card.card.info;
    if(!restaurantDetail) return null;

    return (restaurantDetail.length===0)?<ShimmerMenu/> : (
        <div className="absolute top-24 bg-gray-100 w-[100%] min-h-[calc(100vh-6rem)] flex flex-col items-center">
            {/* <h2>Restaurant Menu</h2> */}
            <div className="p-1 h-48 bg-gray-400 text-white flex justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full">
                <div className="flex justify-center items-center">
                    <img className=" h-[10rem] w-52 md:w-60 rounded-md" src={IMG_CDN_URL+restaurantDetail[0]?.card?.card?.info?.cloudinaryImageId}/></div>
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

            <div className="flex flex-col justify-center items-center w-lg md:max-w-3xl pl-1 pr-1">

                <div className="mt-2 w-full">
                    <h1 className="text-lg font-semibold">Recommended <span>{restaurantDetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.length}</span></h1>
                </div>

                <div className="flex flex-col justify-center items-center pb-4">
                  {(restaurantDetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((foodItem)=><FoodItemCard {...foodItem?.card?.info} key={foodItem?.card?.info?.id}/>)}
                  {/* <FoodItemCard {...restaurantDetail[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards[5].card.info}/> */}
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;