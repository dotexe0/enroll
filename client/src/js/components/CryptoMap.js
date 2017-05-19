import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../css/CryptoMap.css';
const position = [37.381660, -122.114099];
const stamenTonerTiles = 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
import PlaceCard from './PlaceCard';
import data from './data';

class CryptoMap extends Component {

  render() {
    console.log(data);
    var places = data.map( (place, i) => {
      console.log(place.title);
      return (
        <li key={i}>
          <Marker position={place.position}>
            <Popup>
              <PlaceCard title={place.title} subtitle={place.subtitle} avatar={place.avatar} img={place.img} />
            </Popup>
          </Marker>
        </li>
      )

    })
    return (
      <Map
        id="mapid"
        center={position}
        zoom={13}>
       <TileLayer
          attribution={stamenTonerAttr}
          url={stamenTonerTiles}
       />
        {places}
      </Map>
    );
  }
}

export default CryptoMap;
