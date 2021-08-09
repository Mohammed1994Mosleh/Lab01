import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.imageUrl} onClick={this.incrNofp} alt='horn animal' title={this.props.name} ></img>
                <p>{this.props.description}</p>
                <p>❤ {this.state.numberOfpets}</p>

            </div>
        )



    }

}
export default HornedBeasts;