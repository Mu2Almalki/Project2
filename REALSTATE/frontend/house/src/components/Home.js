import {Row , Card ,Col , Button} from 'react-bootstrap'
import axios from "axios"
import {useState, useEffect } from "react"
import {BrowserRouter as Router ,Switch , Route ,Link } from "react-router-dom"
import Moredetails from './Moredetails'

function Home (){
    
    const [House , setHouse]=useState([]);
    // const [addtitle, setAddtitle] = useState ('')
    // const [addimg, setAddImg] = useState ('')
    // const [addLocation , setAddLocation]=useState('');
    // const [addprice, setAddPrice] = useState ('')
    // const [addDetails, setAddDetails] = useState ('')


    useEffect (() =>{
      axios.get('http://localhost:3001/house/home')
      .then((res)=>{
          console.log(res);
          setHouse(res.data);
      })
      },[]);

      // function handlPost(){
      //   axios.post('http://localhost:3001/house/post' , {title: addtitle , img: addimg , Location:addLocation ,
      // price:addprice ,Details : addDetails })
      //   .then((res) => {
      //       console.log(res.data);
      //       setHouse(res.data);
      //   })} 
    

    return(
        <div className="home">

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