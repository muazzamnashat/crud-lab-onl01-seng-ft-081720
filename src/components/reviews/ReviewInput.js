import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={text:""}

  handleSubmit =(event) => {
    const restaurantId = this.props.restaurantId
    event.preventDefault();
    this.props.addReview({text:this.state.text,restaurantId:restaurantId});
    this.setState({text:""});
  }

  handleChange =(event) => {
    this.setState({text:event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        <label>Add Review</label>
          <input type="text" value={this.state.text} onChange={event => this.handleChange(event)}/>
          <input type="submit"/> 
        </form>
      </div>
    );
  }
};

export default ReviewInput;
