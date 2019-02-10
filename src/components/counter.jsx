import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3" ]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); 
  // }

  handleIncrement = product => {
    // ** important: fat arrow function resolves "this" keyword binding issue without super keyword
    // now we don't need to do rebinding the event handler everytime manually 
    // plz take a note that this shortcut function would be got rid of in the future from ES6 or not
    // then use the former apporoach like above with super
    // amazing man..
    // obj.method();
    // function();
    console.log(product)
    this.setState({ count : this.state.count + 1 }); 
  }

  render() {
    const product = { id: 1 };
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button 
          onClick={ () => this.handleIncrement(product)} 
          className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;