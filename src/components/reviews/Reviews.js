import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const deleteReview = this.props.deleteReview;
    const renderReviews = () => {
      return associatedReviews.map((review) => <Review key={review.id} review={review} deleteReview={deleteReview}/>)
    }

    return (
      <ul>
        {associatedReviews.length>0 ? renderReviews(): ""}
      </ul>
    );
  }
};

export default Reviews;
