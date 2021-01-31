import React, { Component } from "react";
import Review from "./Review";

export default class Reviews extends Component {
  renderReviews = () => {
    const reviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurantId
    );

    if (reviews.length > 0) {
      return reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
        />
      ));
    } else {
      return null;
    }
  };

  render() {
    return <ul>{this.renderReviews()}</ul>;
  }
}
