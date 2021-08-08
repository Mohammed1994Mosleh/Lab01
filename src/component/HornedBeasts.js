import React from 'react';


class HornedBeasts extends React.Component{
render (){
return(
    <div>
    <h2>UniWhal</h2>
    <img src={this.props.imageUrl} alt='horn animal' title={this.props.title}></img>
    <p>{this.props.description}</p>
    </div>
)



}

}
export default HornedBeasts;