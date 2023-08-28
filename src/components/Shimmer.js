const Shimmer=()=>{
    return (
        <div className="p-4 absolute top-24 bg-gray-100 w-[100%] min-h-[calc(100vh-6rem)]">
            {/* <h1>Loading...</h1> */}
            {/* {console.log("hello loading")} */}
            <div className="flex flex-wrap justify-center gap-6 p-2 mt-2">
                {Array(10).fill('').map((item,index)=>{
                   return (<div className="w-64 h-74 p-2 border-2 border-gray rounded-lg shadow-md" key={index}>
                        <div className="h-40 w-[100%] rounded-lg bg-gray-300 mb-2"></div>
                        <h2 className="h-5 bg-gray-300 w-[70%] rounded-md mb-2"></h2>
                        <h2 className="h-5 bg-gray-300 w-[90%] rounded-md mb-3"></h2>
                        <h2 className="h-5 bg-gray-300 w-[100%] rounded-md mb-2 "></h2>
                       
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Shimmer;