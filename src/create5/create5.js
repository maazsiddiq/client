import React from 'react';
import { Button, Container, Col, Row} from 'reactstrap';
import {FormGroup, Label, Input, Form} from 'reactstrap';
import './create5.css'

const Create5 = (props) => {
  return (
    <div>
        <h1>CREATE5</h1>
     
      <Container >
      <Row>
    
      <Form  className="five">
      <FormGroup>
        <Label for="examplePassword">New password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Re-enter your New Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
    
      <Button color="success">Chance Password</Button>{' '}
      </Form>
        
      </Row>
    </Container>
   
    </div>
  );
};

export default Create5;