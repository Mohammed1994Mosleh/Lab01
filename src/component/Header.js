import React from 'react';
import './Header.css'


let arr=['hi','welcome','hello','mohammed','mosleh','ahmed'];
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            click:false,
            newWord:'hornes gallery',
            css:'./Header.css'
        }

    }
changestate=()=>{

    this.setState({
        click:true,
        newWord:arr[Math.floor(Math.random() * arr.length)],


    })

   

}

    render() {
        return (
            <h1 onClick={this.changestate}>{this.state.newWord}</h1>
        )


    }

}

export default Header;