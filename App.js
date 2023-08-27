// console.log("Namaste Food");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"
import Body from "./src/components/Body";
import Footer from "./src/components/Footer"
const AppLayout=()=>{
    return (
        <>
        {/* <h1>Hello ReactJs!! You are doing great</h1> */}
            <Header/>
            <Body/>
            <Footer/>
        </>
    )

}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);