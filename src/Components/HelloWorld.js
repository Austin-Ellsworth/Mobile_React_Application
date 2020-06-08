import React from 'react'

// //stateless component

// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name} it is {props.time}</h1>
//     )
// }

class HelloWorld extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name} it is {this.props.time}</h1>
        )
    }
}

export default HelloWorld