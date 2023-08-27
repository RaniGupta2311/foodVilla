// import Logo from "../utils/images/images";
const Title=()=>{
    return (
        <div className="w-24 h-24">
            <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jztgjfG6PTf2pgEu0ycmof2syvuQ40a8bw&usqp=CAU" alt="logo" className="rounded-full"/></a>
        </div>
    )
}
const Header=()=>{
    return (
        <div className="h-24 w-[100%] flex justify-between items-center bg-amber-400 pr-3 sm:pr-8 sm:pl-2 md:pr-4 lg:pr-8 shadow-xl fixed top-0 z-50">
            <Title/>
            <div>
                <ul className="flex gap-3 sm:gap-5 text-white text-lg font-bold tracking-wide md:tracking-widest ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;