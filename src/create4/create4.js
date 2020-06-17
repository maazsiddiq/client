import React from 'react'
import { Button, Container, Col, Row} from 'reactstrap';
import {FormGroup, Input, Form} from 'reactstrap';
import './create4.css'

const Create4 = () => {
    return (
        <div>
            <h1>CREATE4</h1>

      <Container >
      <Row>
     
      <Form  className="four">
      <FormGroup>
      <Input type="text" name="text"  placeholder="Enter your email address"  />
      </FormGroup>
    
      <Button color="success">Send password reset link</Button>{' '}
      </Form>
        
      </Row>
    </Container>
   
        </div>
    )
}
export default Create4