import { useContext } from 'react';

import { IpContext } from '../../context/IpContext';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import mapIcon from '../../utils/mapIcon';

import { Container } from "./styles"

function MapEvent() {
	const { data } = useContext(IpContext);

	const map = useMap();

	map.flyTo([data.location.lat, data.location.lng])

	return null;
}

export default function Map () {
	const { data } = useContext(IpContext);

	return (
		<Container>
			<MapContainer 
				center={[data.location.lat , data.location.lng]} 
				dragging={false} 
				zoom={18} 
				zoomControl={false} 
				scrollWheelZoom={false} 
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker 
					position={[data.location.lat, data.location.lng]}
					icon={mapIcon}
				></Marker>
				<MapEvent />
			</MapContainer>
		</Container>
	)
}