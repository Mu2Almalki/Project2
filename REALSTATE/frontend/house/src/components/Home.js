import {Row , Card ,Col , Button} from 'react-bootstrap'
import axios from "axios"
import {useState, useEffect } from "react"
import {BrowserRouter as Router ,Switch , Route ,Link } from "react-router-dom"
import Moredetails from './Moredetails'
import Serves from './Serves'
import About from './About'
import '../App.css';
import Search from './Search'


function Home (){
    
    const [house, setHouse] = useState([]);
    


    useEffect (() =>{
      axios.get('http://localhost:3001/house/home')
      .then((res)=>{
          console.log(res);
          setHouse(res.data);
      })
      },[]);


    return(
        <div className="home">
        

                
    
<div className="divcard">

     
      <Row xs={1} md={2} className="g-4">
      {/* filteredHouse */}
  {house.map((item, idx) => (
    <Col key={idx}>
      <Card className="TestCard">
        <Card.Img id="sizImge" variant="top" src={item.imge} />
        <Card.Body className="cardStyle">
          <Card.Title> {item.title}</Card.Title>
          <Card.Text>{item.Location}</Card.Text>
          <Card.Text>{item.Price} SAR</Card.Text>
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