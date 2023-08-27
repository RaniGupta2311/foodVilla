import { IMG_CDN_URL } from "../utils/Constants";
const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
    return (
        <div className="w-64 h-74 p-2 border-2 border-gray rounded-lg shadow-md hover:scale-110">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="food-image" className="h-40 w-[100%] rounded-lg"/>
            <div className="text-left p-1 mt-0.5">
                <h2 className="font-sans font-medium whitespace-nowrap text-ellipsis overflow-hidden ...">{name}</h2>
                <p><span className={`text-xl ${avgRating>=3 ?'text-green-600':'text-red-500'}`}>✪</span> {avgRating}</p>
                <h3 className="text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden ...">{cuisines.join(",")}</h3>
            </div>
        </div>
    )
}
export default RestaurantCard;