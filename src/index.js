import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Bike extends React.Component{

//   constructor(){
//     super();
//     this.state = {speed:"100kmph"};
//   }
//   render(){
//   return <h1>This is Bike {this.state.speed}</h1>;
//   }
// }

// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state = { colour: "BLUE" };
//   }
//   render(){
//   return <p>I AM {this.state.colour} CAR</p>
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = { a: "Hurray" };
  }
  render() {
    for (var i = 0; i < 10; i++) {
      return <p> {this.state.a}</p>
    }
  }
}

ReactDOM.render(

  <App />, document.getElementById('root')
);


