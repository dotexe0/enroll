import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class PlaceCard extends Component {

  render() {
    var styles = {
      img: {
        width: 50,
        height: 50,
      }
    }

      const { name, location, position, img, rating } = this.props;

    return (
    <MuiThemeProvider>
    <Card>
      <CardHeader
        title={ name }
        subtitle={ location }
        avatar={ rating }
      />
        <img src={ img } style={styles.img} />
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
    </MuiThemeProvider>
    )
  }

};

export default PlaceCard;
