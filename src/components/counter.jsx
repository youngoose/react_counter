import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    tags: ['1', '2']
  };

  renderTags() {
    if(this.state.tags.length === 0) return <p>there is no tags</p>;

    return <ul>{ this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }</ul>
  }

  render() {
    return (
    <div>
      { this.state.tags.length === 0 && "Please create a new tag!"}
      { this.renderTags() }
    </div>
    )
  }

}
 
export default Counter;