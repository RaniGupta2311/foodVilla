import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errorImage from "../utils/images/errorImage.webp";
const Error=()=>{
    const err=useRouteError();
    // console.log(err);
    // console.log(err.data)
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4279234-3569464.png?f=webp" alt="errorImage"/> */}
            <img src={errorImage} alt="error-image"/>
            <h1 className="text-xl md:text-2xl">Oops! The restaurant you're looking for can't be found</h1>
            <h1 className="text-lg md:text-2xl mt-2">{err.data}</h1>
            {/* <h1>{err.status}</h1> */}
            <Link to="/"><button className="mt-4 p-2 pl-4 pr-4 bg-amber-600 text-white rounded-md">Back Home</button></Link>
        </div>
    )
}
export default Error;