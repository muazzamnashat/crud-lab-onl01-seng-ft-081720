import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={text:""}

  handleSubmit =(event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({text:""});
  }

  handleChange =(event) => {
    this.setState({text:event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={event => this.handleChange(event)}/>
          <input type="submit"/> 
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
