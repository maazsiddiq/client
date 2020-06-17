import React from 'react';
import { Card, Button, Container, Col, Row} from 'reactstrap';
import {FormGroup, Label, Input, Form} from 'reactstrap';
import './create2.css'

const Create2 = (props) => {
  return (
    <div>
        <h1>CREATE2</h1>
     
      <Container >
      <Row>
      <Col xs="12" sm="12">
     
      <Card body className="back">
      <Form  className="two">
      <FormGroup>
      <Input type="text" name="text"  placeholder="Email or Phone Number"  />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Password " />
      </FormGroup>
    
      <Button color="primary">Log In</Button>{' '}
    
      <hr />
     <Button color="success">Create New Account</Button>{' '}

    </Form>
        
    
      </Card>
      </Col>
      </Row>
    </Container>
   
    </div>
  );
};

export default Create2;