import React,{Component} from 'react';
import Data from './data/data.json';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Profile from './Profile';

//export default class App extends Component{
 // render(){
    //var styles={
 //               background:"blue",
 //               color:"white",
 //               textAlign:"center",
 //               padding:"1%",
 //              }
 //   let array=["raja","gautham","ram","prapulla","sairam","nikhil"]
 //   let array1=["gautham","nikhil","raja","sairam","ram","prapulla"]
 //   return(
 //     <div className="App">
 //     <h4 style={styles}>its app component</h4>
 //     {array.map((i,index)=>(
 //       <Profile name={array[index]} bestfriend={array1[index]} key={index}/>
 //       ))
 //     }
 //     
 //     </div>
 //     
 //     )
//  }
// }

//export default class App extends Component{
// constructor(){
//    super();
//    this.state={
//      name:"Swami Sir"
//    }
//  }
//  render(){
//var NameChange=()=>{
//        this.setState({
//          name:"Sairam D"
//        })
//        }
//   return(
//    <div>
//       <h2> {this.state.name} </h2>
//       <button onClick="this.NameChange()">Change Name </button>
//     </div>
//    )
//}  
//}
var App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
    </BrowserRouter>
    );
}


let Home=()=>{
  var info = Data.profiles;
  return(
    <section className="parent">
     {info.map((i,index)=>(
      <article className="child" key={index}>
       <h2> {i.basicInfo.name} </h2>
       <p> {i.basicInfo.role} </p>
       <a href={"mailto:"+i.basicInfo.email}>{i.basicInfo.email}</a><br />
      <a href={"tel:"+i.basicInfo.mobile}>{i.basicInfo.mobile}</a> <br />
      <Link to={{pathname:"/Profile",data:{id:index}}}>View Profile ></Link>
      </article>
      ))
     }
</section>
    );
}

export default App;