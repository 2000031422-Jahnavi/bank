import React, { Component } from 'react'

export default class UserDetails extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            userData:"",
        };
    }

componentDidMount(){
    fetch("http://localhost:5000/userData",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        }, 
        body:JSON.stringify({
          token:window.localStorage.getItem("token"),
        }),
      })
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data,"userData");
        this.setState({userData:data.data});
        if(data.data=='token expired'){
          alert("Token expired please login again");
          window.localStorage.clear();
          window.location.href="./sign-in";
        }
      });
}
logout=()=>{
  window.localStorage.clear();
  window.location.href="./sign-in";
}


render(){
    return(
        <div>
            Name<h3>{this.state.userData.fname}</h3>
            Email<h3>{this.state.userData.email}</h3><br/>
            <button onClick={this.logout} className="btn btn-primary">Logout</button>
        </div>
    );
}
}