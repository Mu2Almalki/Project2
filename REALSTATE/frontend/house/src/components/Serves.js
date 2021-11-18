import axios from "axios"
import {useState, useEffect } from "react"
import {Form} from 'react-bootstrap'
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import {Button,Card} from "react-bootstrap";

const filterBySize = (file) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};

function Serves(){
    const [House , setHouse]=useState([]);


    const [addtitle, setAddtitle] = useState ('')
    const [selectedImage, setSelectedImage] = useState(null);
    const [addLocation , setAddLocation]=useState('');
    const [addprice, setAddPrice] = useState ('')
    const [addDetails, setAddDetails] = useState ('')
    const [enableDel,setEnableDel]= useState (false)

function handlPost(){
        axios.post('http://localhost:3001/house/post' , {title: addtitle ,img :selectedImage, Location:addLocation ,
      price:addprice ,Details : addDetails })
        .then((res) => {
            console.log(res.data);
            setHouse(res.data);
            setEnableDel(true)
        })}

        function handlDel(id){
          console.log(id)
            axios.delete(`http://localhost:3001/house/delete/${id}`)
            .then((res)=>{
                console.log(res)
                setHouse(res.data);
                setEnableDel(false)

            })
        }

    return(
        <div className="serv">
          {(function() {
          if (enableDel) {
            return <div>
            <h1>{House.title}</h1>
            <img src={House.img}></img>
            <h3>{House.Location}</h3>
            <p>{House.Details}</p>
            <h3>{House.price}</h3>
            <button onClick={()=>{handlDel(House.id)}}>Delete</button>

        </div>
          } else {
            return <h3>you need to enter data</h3>;
          }
        })()}
                      
                
      
        <input placeholder="Title" onChange ={(e)=> setAddtitle(e.target.value)}
                         type="text" name="title"></input>
                    

<Uploady
    destination={{ url: "url" }}
    fileFilter={filterBySize}
    accept="images/"
  >
    <UploadButton />
    <UploadPreview />   
  </Uploady>
                             <br/>
                         <input placeholder="Location" onChange ={(e)=> setAddLocation(e.target.value)}
                         type="text" name="title" rows="4" cols="40"></input>
                         <br/> <br></br>
                        <textarea placeholder="Details" onChange ={(e)=> setAddDetails(e.target.value)}
                          name="title" rows="4" cols="40"></textarea>
                          <br/> 
                           <input placeholder="Price" onChange ={(e)=> setAddPrice(e.target.value)}
                         type="text" name="title" rows="4" cols="40"></input><br/>
                        <button onClick={handlPost}>Add </button> 
                        
                        {/* <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Your Data</Form.Label>
    <Form.Control>  <input placeholder="Title" onChange ={(e)=> setAddtitle(e.target.value)}
                         type="text" /></Form.Control>
    <Form.Control >
      <Uploady
    destination={{ url: "url" }}
    fileFilter={filterBySize}
    accept="images/"
  >
    <UploadButton />
    <UploadPreview />   
  </Uploady>
  </Form.Control>
    <Form.Control><input placeholder="Location" onChange ={(e)=> setAddLocation(e.target.value)}
                         type="text"  /></Form.Control>
    <Form.Control><input as="textarea" rows={3} placeholder="Details" onChange ={(e)=> setAddDetails(e.target.value)}
                           /></Form.Control>
    <Form.Control ><input placeholder="Price" onChange ={(e)=> setAddPrice(e.target.value)}
                         type="text" /></Form.Control>
                         <button onClick={handlPost} variant="primary">Add </button>
   
  </Form.Group> */}
  {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
   
    
  </Form.Group> */}
{/* </Form> */}
  
       
                        
                        
    </div>
    )
}

export default Serves;


 