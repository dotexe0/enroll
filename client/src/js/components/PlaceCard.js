import React, { Component } from 'react';

class PlaceCard extends Component {
  render() {
    const { name, location, img, rating } = this.props;

    return (
      <div className="PlaceCard">
        <img src={img}></img>
        <h3>{name}</h3>
        <h5>{location}</h5>
        <h6>{rating}</h6>
      </div>
    );
  }
}
