import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class PlaceCard extends Component {
  render() {
      const { name, location, position, img, rating } = this.props;
    return (
    <Card>
      <CardHeader
        title={ name }
        subtitle={ location }
        avatar={ rating }
      />
        <img src={ img } />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Website" />
        <FlatButton label="Directions" />
      </CardActions>
    </Card>
    )
  }

};

export default PlaceCard;
