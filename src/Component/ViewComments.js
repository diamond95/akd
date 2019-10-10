import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';



export default class AddModal extends React.Component {

  
    render() {
        return(
          
            <Modal key={this.props.modelId}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Komentari za objavu {this.props.modelId}.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <p>
               {this.props.modelData.email}
              </p>
              <p>
               {this.props.modelData.name}
              </p>
              <p>
               {this.props.modelData.body}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Zatvori</Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
