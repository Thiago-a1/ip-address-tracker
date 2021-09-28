import Leaflet from 'leaflet';

import mapIconImg from '../assets/icon-location.svg';

const mapIcon = Leaflet.icon({
	iconUrl: mapIconImg,

	iconSize: [36, 38],
	iconAnchor: [29, 68],
});

export default mapIcon;