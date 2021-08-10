import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornData from '../data.json';
import Modle from './Modle';


class Main extends React.Component{

  render(){
   return(

     <div>
         <Modle/>
         {hornData.map((item,index)=>{

         return(
         <HornedBeasts   key={index} name={item.title} imageUrl={item.image_url} description={item.description} />


         
             

             )
            }
           )
          }
     </div>
  )
 }
}

export default Main;