import {
  Navbar,
  Modal,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Card,
  Col,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Moredetails";
import imge from "./images/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Serves from "./Serves";
import About from "./About";
import Login from "./Login";

let value = 0;

function Navigation() {
  const [house, setHouse] = useState([]);
  //input word
  const [HouseSearch, setHouseSearch] = useState();

  const [filteredHouse, setFilteredHouse] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isPressed,setIsPressed]= useState(false)
  const onPressed=(e)=>{ e.preventDefault()
     setIsPressed(true)}

  // useEffect(() => {
  //   axios.get("http://localhost:3001/house/home").then((res) => {
  //     console.log(res);
  //     setHouse(res.data);
  //   });
  // }, []);

  function SearchResult(e) {
    e.preventDefault();
    const result = house.filter((h) => {
      h.title.toLowerCase().includes(HouseSearch)
    })
    setFilteredHouse(result)
    // axios
    //   .get("http://localhost:3001/house/search/" + HouseSearch)
    //   .then((res) => {
    //     console.log(res);
    //     // setHouse(res.data.items);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={imge} height="150px" width="250px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">
                  <Link exact to="/" style={{ color: "black" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <Link to="/Serves" style={{ color: "black" }} style={isPressed ? {display:"block " }:{display:"none"}} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <Link to="/About" style={{ color: "black" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#action1" onClick={handleShow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </Nav.Link>
              </Nav>
              <i class="fab fa-instagram"></i>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    setHouseSearch(e.target.value);
                  }}
                />
                <Button
                  variant="outline-dark"
                  onClick={(e) => {
                    SearchResult(e);
                  }}
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/Search"><Search/></Route> */}
          {/* <Route path="./Moredetails" element={<Details/>} data={item}/> */}
          <Route path="/Details/:id" element={<Details data={house} />} />
          <Route path="/Login" element={<Login  />} />
          <Route path="/About" element={<About />} />
          <Route path="/Serves" element={<Serves />} />
        </Routes>
      </Router>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
    <label>
      <p>Username</p>
       <input type="text" />
     </label>
      <label>
        <p>Password</p>
        <input type="password" />
     </label>
       <div>
         <button onClick={onPressed} type="submit">Submit</button>
       </div>
    </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Navigation;
