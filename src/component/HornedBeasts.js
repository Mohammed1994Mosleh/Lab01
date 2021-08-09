import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


class HornedBeasts extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            numberOfpets: 0
        }
    }

    incrNofp = () => {
        this.setState(
        {
            numberOfpets:this.state.numberOfpets+1
        }
         
        )
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imageUrl} />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
            {this.props.description}
            {this.state.numberOfpets}
             </Card.Text>
          <Button onClick={this.incrNofp} variant="primary">Votee</Button>
            </Card.Body>
          </Card>

            // <div>
            //     <h2>{this.props.name}</h2>
            //     <img src={this.props.imageUrl} onClick={this.incrNofp} alt='horn animal' title={this.props.name} ></img>
            //     <p>{this.props.description}</p>
            //     <p>❤ {this.state.numberOfpets}</p>

            // </div>
        )



    }

}
export default HornedBeasts;