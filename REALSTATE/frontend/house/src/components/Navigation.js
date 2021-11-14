
import {Navbar ,Container,Nav,Form ,FormControl,Button} from 'react-bootstrap'
import {BrowserRouter as Router , Route, Routes,Link} from "react-router-dom";
import Home from '../components/Home';
import Details from "../components/Moredetails"
import imge from './images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import {useState, useEffect } from "react"

// import "stylesheet"
function Navigation (){
  const [House , setHouse]=useState([]);

  useEffect (() =>{
    axios.get('http://localhost:3001/house/home')
    .then((res)=>{
        console.log(res);
        setHouse(res.data);
    })
    },[]);


    return(
        <div>
          <Router>

<Navbar className="nb" bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#"><img src={imge} height="120px" width="100px"/></Navbar.Brand>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        
        navbarScroll
      >
        <Nav.Link href="#action1"><Link exact to="/">Home</Link></Nav.Link>
        <Nav.Link href="#action1">Serves</Nav.Link>
        <Nav.Link href="#action1">About</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>



    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route path="/Search"><Search/></Route> */}
      {/* <Route path="./Moredetails" element={<Details/>} data={item}/> */}
      <Route path="/Details/:id" element={<Details data={House}/>} />

    </Routes> 
    </Router>
</div>
    )
}
export default Navigation;