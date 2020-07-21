import React from 'react';
import logo from './logo.svg';
import './App.css';
import camera from './camera.jpeg';
import { FormControl,
        FormGroup,
        Form,
        FormLabel,
        Button,
        Radio } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="first" style={{ backgroundImage: `url(${camera})` }}>
          <div className="logo">
            Photography.
          </div>
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
              <Form.Group controlId="formBasicName">
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

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="May 25, 1977" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="name" placeholder="Dhaka" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="country" placeholder="Bangladesh" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Cancel
              </Button>

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
