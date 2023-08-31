import { IMG_CDN_URL } from "../utils/Constants";

const FoodItemCard=({name,description,imageId,price,isVeg})=>{
    return (
        <div className="flex pb-4 border-b-2 mb-3 justify-between w-full gap-1 sm:gap-4 md:gap-12 lg:gap-16">
            <div className="w-[22rem] md:w-[26rem] h-36">
            {isVeg?<h1 className="border-[1px] border-green-600 inline-block text-xs p-[1px]">🟢</h1>:<h1 className="border-[1px] border-red-600 inline-block text-xs p-[1px]">🔺</h1>}
            <h1 className="text-md font-light mt-1">{name}</h1>
            <p className="font-light">Rs. {price/100}</p>
            <p className="text-gray-500 text-sm mt-2 text-ellipsis overflow-hidden ...">{description}</p>
            </div>

            <div className="w-32 h-24 flex flex-col">
                <img className="w-full h-full rounded-md" src={IMG_CDN_URL+imageId}/>
                <button>Add</button>
            </div>

        </div>
    )
}
export default FoodItemCard;