import React, {Component} from 'react';
//line above is the same as saying
//const Component = React.Component;

//Difference between a functional and a class
//A functional component does just what is says.. some info goes in and some info goes out.
// A class component is when you want some internal record keeping. For it to be aware of what is going on. 

//State is just a javascript object that records and reacts to users events. 
//Every class base component has its own state objects.  When this changes component re-renders it force all chidlren to update.



//functional component.  This is know as that because its just a function.
//const SearchBar1 = () => {
//	return <input />
//};


// this is a separate function example.  We used the arrow function on line 26 instead.
//  onInputEvent(event) {
//		console.log(event.target.value);
//	}


//Note every class must have a render function as seen below.
class SearchBar extends Component {

	constructor(props) {

		super(props);  // will come back to explain this.

		this.state= {term: 'Enter your value'};	
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={(event) => { this.setState({ term: event.target.value})} } />				
			</div>
		);	
	}
}






export default SearchBar;


//event => console.log(event.target.value)
