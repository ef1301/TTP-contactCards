import './App.css';

import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
	return (
		<div id="Information">
		<h1>Name: {this.props.name}</h1>
		<h1>Phone Number: {this.props.phone}</h1>
		<h1>Email Address: {this.props.email}</h1>
		</div>
	);
    }
};	      

class Count extends Component{
    constructor(props) {
	super(props);
	this.state = {
	    current: props.current
	}
	this.Increment = this.Increment.bind(this);	
	this.Decrement = this.Decrement.bind(this);
    }
    
    Increment = () => {
	let num = this.state.current + 1;
	this.setState({current: num});
	console.log(this.state.current);
    }

    Decrement = () => {
	let num = this.state.current - 1;
	if(num >= 0){	
	    this.setState({current: num});
	    console.log(this.state.current);
	}
	else{
	    alert("Stop! You can't decrement anymore.");
	}
    }
    render(){
	return (
		<div id='count'>
		<button id='increase' type='button' onClick={this.Increment.bind(this)}>Increment</button>
		<button id='decrease' type='button' onClick={this.Decrement.bind(this)}>Decrement</button> 
		<p>Count: {this.state.current}</p>
		</div>
	);
	
    }
}


function App() {
    return (
	    <div id="cards">
	    <ContactCard name="Emily" phone={45822873} email="stuff@stuff.edu"> </ContactCard>
	    <ContactCard name="Brian" phone={12345678} email="morestuff@stuff.edu"> </ContactCard>
	    <ContactCard name="Jessica" phone={873547632} email="moststuff@stuff.edu"> </ContactCard>
	    <Count current={1}/>
	    </div>
    );
}

export default App;
