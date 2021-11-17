// import axios from 'axios';
import {Row , Card ,Col , Button , Link} from 'react-bootstrap'
import { useParams } from "react-router-dom";
import {useState} from "react"
import '../App.css'


function Search ({data}){
const {word} = useParams()
  const [filteredHouse, setFilteredHouse] = useState([])


  
{console.log(word)}

    return(
     
<div className="Search">
{data
        .filter((item) => item.title.toLowerCase().includes(word.toLowerCase()))
        .map((item) => (
        <div>
{/* <Col key={idx}> */}
      <Card className="card44">
        <Card.Img className="sizImge" variant="top" src={item.imge} />
        <Card.Body className="cardStyle">
          <Card.Title> {item.title}</Card.Title>
          <Card.Text>{item.Location}</Card.Text>
          <Card.Text>{item.Price}</Card.Text>
          {/* <Link to={`/Details/${item.id}`} > <Button variant="secondary">More Details</Button></Link> */}
        </Card.Body>
      </Card>
    {/* </Col> */}
          </div>
        
        ))}
 </div>
       
    )
}

export default Search;