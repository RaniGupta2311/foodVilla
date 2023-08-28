import { IMG_CDN_URL } from "../utils/Constants";
const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId,costForTwo,sla,areaName})=>{
    return (
        <div className="w-64 h-74 p-2 border-2 border-gray rounded-lg shadow-md hover:scale-105">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="food-image" className="h-40 w-[100%] rounded-lg"/>
            <div className="text-left p-1 mt-0.5">
                <h2 className="font-sans font-semibold whitespace-nowrap text-ellipsis overflow-hidden ...">{name}</h2>
                <h3 className="text-gray-600 text-sm whitespace-nowrap text-ellipsis overflow-hidden ...">{cuisines.join(",")}</h3>
                <h3 className="text-sm text-gray-600">{areaName}</h3>
                <div className="flex justify-between items-center font-medium mt-2">
                    <p className="text-md"><span className={`text-lg ${avgRating>=4 ?'text-green-600':'text-red-500'}`}>✪</span> {avgRating}</p>
                    <p className="text-md">{sla.lastMileTravelString}</p>
                    <p className="text-md">{costForTwo}</p>
                </div>
                </div>
        </div>
    )
}
export default RestaurantCard;