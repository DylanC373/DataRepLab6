// Import necessary libraries and components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Define the main App component
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* Test Comment  */}

<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route> 
        <Route path='/read' element={<Header></Header>}></Route> 
        <Route path='/create' element={<Footer></Footer>}></Route> 
      </Routes>
     

    </div>
    </BrowserRouter>
  );
}


// Export the App component as the default export

export default App;
