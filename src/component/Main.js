import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornData from '../data.json';
import Modle from './Modle';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      horn: '1',
      hornData1: hornData
    }
  }


  display = async (e) => {
    e.preventDefault();
    
    await this.setState({
      horn: e.target.value,
     }
    )
    this.filterhorn()



  }


async filterhorn() {
    if (this.state.horn=='all'){
      this.setState({
        hornData1:hornData,
       }
      )


    }

    else{
      let hornData2 = hornData.filter(item => {
        if (item.horns == this.state.horn) {
           return item
         }
       }
       )
   
       console.log(hornData2);
       this.setState({
         hornData1:hornData2,
        }
       )

    }
  
     
  }


  render() {
     return (

      <div>

        <Form.Select onChange={this.display} name='horns' aria-label="Default select example">
          <option value='all'>Dsiplay All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="100">Hundred</option>
        </Form.Select>

       

        {this.state.hornData1.map((item, index) => {
         
            return (
              <HornedBeasts key={index} name={item.title} imageUrl={item.image_url} description={item.description} />





            )
          
        }
        )
        }
      </div>
    )
  }
}

export default Main;