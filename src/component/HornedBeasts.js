import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Modle from './Modle';


class HornedBeasts extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            numberOfpets: 0,
            show1:false
            
        }
    }

    incrNofp = () => {
        this.setState(
        {
            numberOfpets:this.state.numberOfpets+1
        }
         
        )
    }
    
    displaymodule = () => {
        this.setState(
        {
           show1:true
        }
         
        )
        console.log(this.state.show1);
    }

    removemodle = () =>{
        this.setState(
            {
               show1:false
            }
        )

    }

    render() {
        return (

          <div> 
            <Modle show1={this.state.show1} title={this.props.name} src={this.props.imageUrl} function={this.removemodle} description={this.props.description} />
            <Card style={{ width: '18rem' }}>
            <Card.Img onClick={this.displaymodule} variant="top" src={this.props.imageUrl} />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
            {this.props.description}
            {this.state.numberOfpets}
             </Card.Text>
          <Button onClick={this.incrNofp} variant="primary">Votee</Button>
            </Card.Body>
          </Card>
     </div> 
            
        )



    }

}
export default HornedBeasts;