import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


class CryptoMap extends Component {
  render() {
    return (
      <Map
        center={position}
        zoom={13}>
       <TileLayer
          attribution={stamenTonerAttr}
          url={stamenTonerTiles}
       />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default CryptoMap;
