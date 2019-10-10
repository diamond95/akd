import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';



export default class AddModal extends React.Component {

  
    render() {
        return(
          
            <Modal key={this.props.id}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Komentari za objavu {this.props.id}.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Zatvori</Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
