import React, { Component } from 'react';



class Profile extends Component {
    state={
        FullName: 'Name: Jihed Laribi',Bio:"Bio: Coding",imgSrc:"/jihed.jpg",Profession:"Profession: Web developer"
    }
    render() {
        return (
            <div className="div1">
                 <img src={this.state.imgSrc}/>
   <h1>    {this.state.FullName} </h1>
   <h1>    {this.state.Bio} </h1>
   <h1>    {this.state.Profession} </h1>
            </div>
        );
    }
}


Profile.propTypes = {

};


export default Profile;
