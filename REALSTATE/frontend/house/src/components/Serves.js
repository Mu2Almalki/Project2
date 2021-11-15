import axios from "axios"
import {useState, useEffect } from "react"
import {Form} from 'react-bootstrap'

function Serves(){
    const [House , setHouse]=useState([]);

    const [addtitle, setAddtitle] = useState ('')
    const [addimg, setAddImg] = useState ('')
    const [addLocation , setAddLocation]=useState('');
    const [addprice, setAddPrice] = useState ('')
    const [addDetails, setAddDetails] = useState ('')


function handlPost(){
        axios.post('http://localhost:3001/house/post' , {title: addtitle , img: addimg , Location:addLocation ,
      price:addprice ,Details : addDetails })
        .then((res) => {
            console.log(res.data);
            setHouse(res.data);
        })}

    return(
        <div>
        {
            House.map((item) =>{
                return (
                    <div>
                        <img>{item.img}</img>
                        <h1>{item.title}</h1>
                        <p>{item.Details}</p>
                        <h3>{item.price}</h3>
                        
                    </div>
                )

            })
        }
        
        <input placeholder="Title" onChange ={(e)=> setAddtitle(e.target.value)}
                         type="text" name="title"></input>
                         <br/>
                         <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label>Small file input example</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>
  <br/>
                         <input placeholder="Location" onChange ={(e)=> setAddLocation(e.target.value)}
                         type="text" name="title"></input>
                         <br/> 
                        <textarea placeholder="Details" onChange ={(e)=> setAddDetails(e.target.value)}
                          name="title" rows="4" cols="50"></textarea>
                          <br/>
                           <input placeholder="Price" onChange ={(e)=> setAddPrice(e.target.value)}
                         type="text" name="title"></input><br/>
                        <button onClick={handlPost}>Add</button>
                        
                        
    </div>
    )
}

export default Serves;


 