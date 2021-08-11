import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Modle.css'


class Modle extends React.Component{

constructor(props){
    super(props)
    this.state={
        show:false
    }
}



handleClose = () => {

    this.props.function()
   
}

    render(){
       
        return(
            <Modal show={this.props.show1} onHide={this.show}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img className='modleimage' src={this.props.src} /> 
             <p>{this.props.description}</p>
             </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}
export default Modle;