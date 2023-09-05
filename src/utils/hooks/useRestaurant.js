import {useState,useEffect} from "react";
import { RESTAURANT_MENU_API } from "../Constants";
const useRestaurant=(resId)=>{
    const [restaurantDetail,setRestaurantDetail]=useState([]);
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data=await fetch(RESTAURANT_MENU_API+resId);
        const json=await data.json();
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info);
        setRestaurantDetail(json.data.cards);
    }   
    return restaurantDetail;
}
export default useRestaurant;