import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Data from './data/data.json';

var styles={
                background:"blue",
                color:"white",
                textAlign:"center",
                padding:"1%",
               }

//let Profile=(props)=>{
//	var indexValue=props.location.Data.id;
//	var specificProfile=Data.Profiles[indexValue];
//	return(
//		<h2 style={styles}>its {specificProfile.basicInfo.name} Profile</h2>
//		);
//}
class Profile extends Component{
 render(){
  var indexValue=this.props.location.data.id;
     var specificProfile=Data.profiles[indexValue];    
     return(
      <div>
              <h2>{specificProfile.basicInfo.name} </h2>
      </div>)
 }
}


 export default Profile;