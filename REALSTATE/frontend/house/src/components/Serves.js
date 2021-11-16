import axios from "axios"
import {useState, useEffect } from "react"
import {Form} from 'react-bootstrap'
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

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
        <div>
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
                         <br/>
                         {/* <Form.Group controlId="formFileSm" className="mb-3">
                           <Form.Control type="file" size="sm" onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}/>
                            </Form.Group> */}

<Uploady
    destination={{ url: "my-server.com/upload" }}
    fileFilter={filterBySize}
    accept="image/*"
  >
    <UploadButton />
    <UploadPreview />   
  </Uploady>
                             <br/>
                         <input placeholder="Location" onChange ={(e)=> setAddLocation(e.target.value)}
                         type="text" name="title"></input>
                         <br/> 
                        <textarea placeholder="Details" onChange ={(e)=> setAddDetails(e.target.value)}
                          name="title" rows="4" cols="50"></textarea>
                          <br/>
                           <input placeholder="Price" onChange ={(e)=> setAddPrice(e.target.value)}
                         type="text" name="title"></input><br/>
                        <button onClick={handlPost}>Add </button>
                        
                        
                        
    </div>
    )
}

export default Serves;


 