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

function App() {
    return (
	    <div id="cards">
	    <ContactCard name="Emily" phone={45822873} email="stuff@stuff.edu"> </ContactCard>
	    <ContactCard name="Brian" phone={12345678} email="morestuff@stuff.edu"> </ContactCard>
	    <ContactCard name="Jessica" phone={873547632} email="moststuff@stuff.edu"> </ContactCard>
	    </div>
    );
}

export default App;
