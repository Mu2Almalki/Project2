import {Carousel, Card ,Col , Button} from 'react-bootstrap'
import axios from "axios"
import {useState } from "react"
import {BrowserRouter as Router ,Switch , Route ,Link,useParams } from "react-router-dom"
import Navigation from './Navigation'


function Moredetails({data}){
    const {id} = useParams();
    const [House1 , setHouse1]=useState([]);
console.log(id)
console.log(data)
   
        
    return(
        <div className="maindiv">
        {data
        .filter((item) => item.id === id)
        .map((item) => (
          <div>
            <br></br>
            <h1>{item.id}</h1>
            <h3>{item.title}</h3>
            <div className="DetailsCard" key={item.id}>
              <div className="DetailsImg">
                {/* <img alt="" src={item.snippet.thumbnails.default.url}></img> */}
                {/* <img src={`http://localhost:3001/house/details/${id}`}></img> */}
              </div>
              <div className="DetailsP">
                <p>{item.Details}</p>
                <br/>
                <h2>{item.Price}</h2>
                <button onClick="">Conact Us</button>
                <button onClick="">Email</button>
              </div>
            </div>
          </div>
        ))}
        
   </div> )
}
export default Moredetails;