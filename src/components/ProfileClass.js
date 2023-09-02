import React from "react";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        return (
            <div>
                <p>Name: {this.props.name}</p>
            </div>)
    }
}
export default ProfileClass;