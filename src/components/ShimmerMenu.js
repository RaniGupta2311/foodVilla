const ShimmerMenu=()=>{
    return (
        <div className="absolute top-24 w-[100%] min-h-[calc(100vh-6rem)] flex flex-col items-center">
            <div className="p-1 h-48 bg-gray-200 text-white flex justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full">
                <div className="flex justify-center items-center">
                        <div className="h-[10rem] w-52 md:w-60 rounded-md bg-gray-100"></div>
                        </div>
                    <div className="max-w-lg justify-between">
                    <h1 className="w-48 h-6 bg-gray-100 mb-2"></h1>
                    <h1 className="w-40 h-5 bg-gray-100 mb-2"></h1>
                    <h1 className="w-32 h-5 bg-gray-100 mb-2"></h1>
                    <div className="w-52 h-5 bg-gray-100 mt-3">
                    </div>
                    </div>
            </div>
            {/* <h1>Shimmer Menu Loading</h1> */}
            <div className="flex flex-col justify-center items-center w-lg md:max-w-3xl pl-1 pr-1">
                {Array(5).fill("").map((item,index)=>{
                    return <div key={index} className="flex border-t-2 mt-2 pt-4">
                        <div className="w-[16rem] md:w-[26rem] h-36 ">
                            <h1 className="w-44 h-8 bg-gray-200 mb-2 rounded-md"></h1>
                            <p className="w-12 h-8 bg-gray-200 mb-3 rounded-md"></p>
                            <p className="w-60 h-6 bg-gray-200 rounded-md"></p>
                        </div>
                        <div>
                            <div className="w-24 md:w-32 h-24 flex flex-col bg-gray-200 rounded-md"></div>

                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default ShimmerMenu;