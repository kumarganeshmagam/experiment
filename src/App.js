import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Slide } from 'react-slideshow-overlay'

const slideImages = ['https://thumbs.dreamstime.com/b/abstract-scene-axis-cnc-milling-machine-g-code-data-cutting-metal-gear-parts-solid-ball-endmill-tools-automotive-159792984.jpg', 'https://media.istockphoto.com/id/155600111/photo/cnc-lathe-processing.jpg?s=612x612&w=0&k=20&c=x0jO-YEboN0rhUQ2-nmzmUFHnTOhZ6562tphg-U5mNs=', 'https://drscdn.500px.org/photo/88990905/m%3D900/1b0e9571bcc505fa6c0992fad3663ceb']
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

function App() {
  return (
    
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#OMS">OMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

       <Slide {...properties}>
          <div className="each-slide">
              <div style={{ backgroundImage: `url(${'https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'})` }}>
                  <span>Slide 1</span>
              </div>
          </div>
          <div className="each-slide">
              <div style={{ backgroundImage: `url(${'https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'})` }}>
                  <span>Slide 2</span>
              </div>
          </div>
          <div className="each-slide">
              <div style={{ backgroundImage: `url(${'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'})` }}>
                  <span>Slide 3</span>
              </div>
          </div>
      </Slide>
      </header>
  );
}

export default App;
