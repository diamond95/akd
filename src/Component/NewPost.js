import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';



export default class NewModal extends React.Component {

  
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
              
            
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Zatvori</Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
