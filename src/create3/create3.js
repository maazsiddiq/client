import React from 'react'
import { Button, Container, Col, Row} from 'reactstrap';
import {FormGroup, Input, Form} from 'reactstrap';
import './create3.css'

const Create3 = () => {
    return (
        <div>
            <h1>CREATE3</h1>
            
            <Container>
      <Row>

     
    <Form className="three">
      <FormGroup >
      <Input type="text" name="text"  placeholder="Your email address"  />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Your password " />
      </FormGroup>
    
      <Button color="primary">Log In</Button>{' '}
    
   
    </Form>
        
    
   
      </Row>
    </Container>
   
        </div>
    )
}
export default Create3