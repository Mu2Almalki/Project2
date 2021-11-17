import {Carousel, Card ,Col , Button, Alert} from 'react-bootstrap'
import axios from "axios"
import {useState } from "react"
import {BrowserRouter as Router ,Switch , Route ,Link,useParams } from "react-router-dom"
import Navigation from './Naviga'
import '../App.css';


function Moredetails({data}){
    const {id} = useParams();
    const [House1 , setHouse1]=useState([]);
console.log(id)
console.log(data)
   
function send() {
  alert("Your message has been sent, and we will contact you shortly")
}
        
    return(
        <div className="maindiv">
        {data
        .filter((item) => item.id === id)
        .map((item) => (
          <div>
            <br></br>
            <h3>{item.title}</h3>
{/* _________________________________________________ */}
{item.imgDetails.map((e)=>{
 
  return(
<div className="divmore" >
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={e.img1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={e.img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={e.img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
  )

})}

{/* __________________________________________________ */}


            <div className="DetailsCard" key={item.id}>
              <div className="DetailsP">
                <p>{item.Details}</p>
                <br/>
                <h2>{item.Price}</h2>
<hr></hr>
                <div className="iconBtn">
                <form>
                  <h5>Hello, I would like to inquire about your advertisement, </h5>
                    <h5> please contact me as soon as possible.</h5>
                  <br></br>
                  Name : <input placeholder="Enter Your Name"></input>
                  <br></br>
                  E-mail : <input placeholder="Enter Your E-mail"></input>

                </form>


                <button onClick={() => send()} className="bttn"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
</svg></button></div>
              </div>
            </div>
          </div>
        ))}
        
   </div> )
}
export default Moredetails;