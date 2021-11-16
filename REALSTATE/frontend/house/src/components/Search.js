import {Row , Card ,Col , Button} from 'react-bootstrap'
import axios from 'axios';


function Search (){
    const [House, setHouse] = useState([]);

  const dispatch = useDispatch();

  

    return(
     
<div>
      {(function() {
          if (Search==undefined) {
            return (<h2> Sorry, there are no items available at the moment </h2>);
          } else {
            return (
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
   
          <Link to={`/Details/${item.id}`} > <Button variant="secondary">More Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>  
                </div>
            )
            
          }
        })()} 
        
      </div>
       
    )
}

export default Search;