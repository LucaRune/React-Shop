import { Navbar,Container,Nav,Card,Button} from 'react-bootstrap';
import './App.css';
import red from './red.jpg';
import purple from './ple.jpg';
import yellow from './Yellow.jpg';
import {useState} from "react";
import Data from './data';


function App() {

    const [flower,setflower] = useState(Data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card className="background">
        <Card.Body>
          <Card.Title>
              <p/>20% Season Off</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button className="btn" variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <img src={red} width={250}/>
              <p/>
              <h4 className="name">{flower[0].title}</h4>
              <p className="price">{flower[0].content} <br/> {flower[0].price}$</p>
          </div>
          <div className="col-md-4">
              <img src={yellow} width={250}/>
              <p/>
              <h4 className="name">{flower[1].title}</h4>
              <p>{flower[1].content} <br/> {flower[1].price}$</p>
          </div>
          <div className="col-md-4">
              <img src={purple} width={250}/>
              <p/>
              <h4  className="name">{flower[2].title}</h4>
              <p>{flower[2].content} <br/> {flower[2].price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
