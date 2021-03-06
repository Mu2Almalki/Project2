import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { Button, Card } from "react-bootstrap";

const filterBySize = (file) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};

function Serves() {
  const [House, setHouse] = useState([]);

  const [addtitle, setAddtitle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [addLocation, setAddLocation] = useState("");
  const [addprice, setAddPrice] = useState("");
  const [addDetails, setAddDetails] = useState("");
  const [enableDel, setEnableDel] = useState(false);

  function handlPost() {
    axios
      .post("http://localhost:3001/house/post", {
        title: addtitle,
        img: selectedImage,
        Location: addLocation,
        price: addprice,
        Details: addDetails,
      })
      .then((res) => {
        console.log(res.data);
        setHouse(res.data);
        setEnableDel(true);
      });
  }

  function handlDel(id) {
    console.log(id);
    axios.delete(`http://localhost:3001/house/delete/${id}`).then((res) => {
      console.log(res);
      setHouse(res.data);
      setEnableDel(false);
    });
  }

  return (
    <div className="serv">
      {(function () {
        if (enableDel) {
          return (
            <div>
              <h1>{House.title}</h1>
              <img src={House.imge}></img>
              <h3>{House.Location}</h3>
              <p>{House.Details}</p>
              <h3>{House.price}</h3>
              <button type="button" class="btn btn-secondary"onClick={() => {handlDel(House.id);}}>
                Delete </button>
            </div>
          );
        } else {
          return <h3> Enter Your Data</h3>;
        }
      })()}
      <div>
      <input
        placeholder="Title"
        onChange={(e) => setAddtitle(e.target.value)}
        type="text"
        name="title"
      ></input>
      <br /><br></br>
      <input
        placeholder="Location"
        onChange={(e) => setAddLocation(e.target.value)}
        type="text"
        name="title"
        rows="4"
        cols="30"
      ></input>
      <br /> <br></br>
      <textarea
        placeholder="Details"
        onChange={(e) => setAddDetails(e.target.value)}
        name="title"
        rows="3"
        cols="25"
      ></textarea>
            <br />      <br></br>


      <input
        placeholder="Imge"
        onChange={(e) => setSelectedImage(e.target.value)}
        type="text"
        name="title"
      />
      <br />      <br />

      <input
        placeholder="Price"
        onChange={(e) => setAddPrice(e.target.value)}
        type="text"
        name="title"
        rows="4"
        cols="40"
      ></input>
      <br></br>      <br></br>

      <button type="button" class="btn btn-secondary" onClick={handlPost}>Add</button>

      </div>
   
    </div>
  );
}

export default Serves;
