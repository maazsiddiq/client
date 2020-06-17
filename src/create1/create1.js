import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Row,Col,Container} from 'react-bootstrap'
import './create1.css'

const Create1 = (props) => {
  return (
    <Container>
      <Row>
        
    <Form className="one">
      <FormGroup >
      <Input type="email" name="email" id="exampleEmail"  placeholder="Your email address"  />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Create a password " />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Country of residency</Label>
        <Input type="city" name="city" id="exampleCity" placeholder="with a placeholder" />
      </FormGroup>

      <Button color="success">submit</Button>{' '}
    </Form>
  
    </Row>
    </Container>
  );
}

export default Create1;