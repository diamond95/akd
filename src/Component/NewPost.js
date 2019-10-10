import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';



export default class NewModal extends React.Component {

    constructor() {
        super();
        this.state = {
          title: '',
          body: ''
        };
      }
      change = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            title: this.title.value,
            body: this.body.value,

          }
        });
      };
    render() {
        return(
          
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Nova objava
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Naziv
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Unesi naziv"
                    name="title"
                    ref={ref => {
                      this.title = ref;
                    }}
                    value={this.state.title}
                    onChange={e => this.change(e)}
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Opis
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Unesi opis" 
                    name="body"
                    ref={ref => {
                      this.body = ref;
                    }}
                    value={this.state.body}
                    onChange={e => this.change(e)}
                    />
                    </Col>
                </Form.Group>
                </Form>
            
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={e => this.onSubmit(e)}>Dodaj</Button>
                <Button onClick={this.props.onHide}>Zatvori</Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
