import React from 'react';
import logo from './logo.svg';
import camera from './camera.jpeg';
import { FormControl,
         FormGroup,
         Form,
         FormLabel,
         Button,
         ButtonGroup,
         ToggleButton,
         Radio } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="first" style={{ backgroundImage: `url(${camera})` }}>
          <div className="logo">
            Photography.
          </div>
          <div className="up-title">
            CLICK FOR YOUR SHOOT
          </div>
          <div className="main-logo">
            Photography.
          </div>
          <div className="low-title">
            JOURNEY EVERYWHERE
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
                <Form.Text className="text-muted" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="name" placeholder="ftanvirhasan@gmail.com" />
                <Form.Text className="text-muted" />
              </Form.Group>

              <Form.Group controlId="formBasicCountry">
                <Form.Label>Type</Form.Label>
                <ButtonGroup toggle>
                  <ToggleButton type="radio" variant="secondary">
                    Male
                  </ToggleButton>
                  <ToggleButton type="radio" variant="secondary">
                    Female
                  </ToggleButton>
                  <ToggleButton type="radio" variant="secondary">
                    Nonbinary
                  </ToggleButton>
                </ButtonGroup>
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
                <Form.Text className="text-muted" />
              </Form.Group>

              <Form.Group controlId="formBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="country" placeholder="Bangladesh" />
                <Form.Text className="text-muted" />
              </Form.Group>

              <Form.Group controlId="formBasicCountry">
                <Form.Label>Type</Form.Label>
                <ButtonGroup toggle>
                  <ToggleButton type="radio" variant="secondary">
                    Bronze
                  </ToggleButton>
                  <ToggleButton type="radio" variant="secondary">
                    Silver
                  </ToggleButton>
                  <ToggleButton type="radio" variant="secondary">
                    Gold
                  </ToggleButton>
                </ButtonGroup>
              </Form.Group>

            <div className = "buttons">
              <Button variant="primary" type="secondary">
                <div className = "cancel">
                  CANCEL
                </div>
              </Button>

              <Button variant="primary" type="submit">
              <div className = "submit">
                  SUBMIT
                </div>
              </Button>
            </div>
            </Form>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
