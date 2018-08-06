import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
      status: false
		}
	} 

onClick = () => {

  if(this.state.status == false)
  {
    this.setState({status: true})
  } else {
    this.setState({status: false})
  }
  this.setState({
    show: `Because he didn't node how to express himself`
  });
}

	render() {
		return (
      <div>
        <h1>Why was the javascript developer sad?</h1>
				<br />
        <button onClick={this.onClick}>Answer</button><br />
        <br />
        <h1>{this.state.status ? "Because he didn't node how to express himself" : null}</h1>
			</div>
		)
	}
}

export default App;
