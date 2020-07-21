import React from 'react';
import logo from './logo.svg';
import './App.css';
import camera from './camera.jpeg';
import { FormControl,
        FormGroup,
        Form,
        FormLabel,
        Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="first">
        <div className="logo">
              Photography.
            </div>
          <img src= {camera} alt ='camera'/>
           
        </div>
        <div className="second">
          <div className="registration">
            Registration
          </div>
            <div className="subtitle">
              CLICK FOR YOUR SHOOT
            </div>

          <div className= "form">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Tanvir Hasan" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="name" placeholder="ftanvirhasan@gmail.com" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
