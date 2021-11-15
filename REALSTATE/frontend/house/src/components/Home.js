import {Row , Card ,Col , Button} from 'react-bootstrap'
import axios from "axios"
import {useState, useEffect } from "react"
import {BrowserRouter as Router ,Switch , Route ,Link } from "react-router-dom"
import Moredetails from './Moredetails'
import Serves from './Serves'
import About from './About'

function Home (){
    
    const [House , setHouse]=useState([]);
    


    useEffect (() =>{
      axios.get('http://localhost:3001/house/home')
      .then((res)=>{
          console.log(res);
          setHouse(res.data);
      })
      },[]);

      

    return(
        <div className="home">
 <div class="m-4">
    <form method="post">
        <div class="row align-items-center g-3">
            <div class="col-auto">
                <label class="visually-hidden" for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Email" required/>
            </div>
            <div class="col-auto">
                <label class="visually-hidden" for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" required/>
            </div>
            <div class="col-auto">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkRemember"/>
                    <label class="form-check-label" for="checkRemember">Remember me</label>
                </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>
</div>
<div>
      <Row xs={1} md={2} className="g-4">
  {House.map((item, idx) => (
    <Col>
      <Card>
        <Card.Img className="sizImge" variant="top" src={item.imge} />
        <Card.Body>
          <Card.Title> {item.title}</Card.Title>
          <Card.Text>{item.Location}</Card.Text>
          <Card.Text>{item.Price}</Card.Text>
          {/* <Card.Text>{item.Details}</Card.Text> */}
          <Link to={`/Details/${item.id}`} > <Button variant="secondary">More Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
        
      </div>
    )
}
export default Home;