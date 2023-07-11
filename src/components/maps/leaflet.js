/* eslint-disable */
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
// eslint-disable-next-line import/no-unresolved
import 'leaflet/dist/leaflet.css?url=false';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import { GmapWraper } from './map-style';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LeafletMapBasic(props) {
  const { latitude, longitude, width, height, zoom } = props;

  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </GmapWraper>
  );
}
LeafletMapBasic.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

function LeafletMapMultipleIcon(props) {
  const { latitude, longitude, width, height, zoom, data } = props;

  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((item) => {
          return (
            <Marker key={item.id} position={item.position}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </GmapWraper>
  );
}

LeafletMapMultipleIcon.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
};

function LeafletMapCustomIcon(props) {
  const { latitude, longitude, width, height, zoom, faIcon } = props;
  const fontAwesomeIcon = L.divIcon({
    html: `<i style="color: #2880CA" class="${faIcon}"></i>`,
    iconSize: [20, 20],
    className: 'myDivIcon',
  });
  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={fontAwesomeIcon}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </GmapWraper>
  );
}
LeafletMapCustomIcon.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  faIcon: PropTypes.string,
};

function LeafletMarkerCluster(props) {
  const { latitude, longitude, width, height, zoom, data } = props;

  const position = [latitude, longitude];
  return (
    <GmapWraper width={width} height={height}>
      <MapContainer center={position} zoom={zoom} className="markercluster-map" maxZoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {data.map((item) => {
            return (
              <Marker key={item.id} position={item.position}>
                <Popup>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </GmapWraper>
  );
}

LeafletMarkerCluster.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
};

export { LeafletMapBasic, LeafletMapMultipleIcon, LeafletMapCustomIcon, LeafletMarkerCluster };
