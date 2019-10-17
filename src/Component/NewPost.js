import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';



function WarningBanner(props) {
  return (
    <div className={props.warn ? "warning": "hide"}>
      <h5> Uspješno dodano! </h5>
    </div>
  );
}


export default class NewModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',
          showWarning: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
     
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
          method: 'POST',
          headers: {  "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify({
            title: this.title.value,
            body: this.body.value,
            userId: 1,
          })
        }).then(response => response.json())
        .then(
          this.handleToggleClick,
        );
      };

      handleToggleClick() {
        
        this.setState(prevState => ({
          showWarning: !prevState.showWarning,   
        }));
        this.closeAddBoardModal();
      }
      closeAddBoardModal(){
        setTimeout(() => {
          this.setState(this.props.onHide);
          this.setState(this.state = {
            showWarning: false,
            title: '',
            body: '',
          });
        }, 1300)
        
      }
   
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
                    name="title" autoComplete="off"
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
                    name="body" autoComplete="off"
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
                <WarningBanner warn={this.state.showWarning} />

                <Button variant='success' onClick={e => this.onSubmit(e), this.handleToggleClick}>Dodaj</Button>
                <Button onClick={this.props.onHide}>Odustani</Button>
            </Modal.Footer>
          </Modal>
        );
    }
    
}
