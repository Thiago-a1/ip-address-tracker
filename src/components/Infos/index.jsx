import { useContext } from 'react';

import { IpContext } from '../../context/IpContext';

import { Container } from './styles';

export default function Infos () {
	const { data } = useContext(IpContext);

	return (
		<Container>
			<div>
				<h2>Ip Address</h2>
				<h3>{data.ip}</h3>
			</div>
			<div>
				<h2>Location</h2>
				<h3>{data.location.city}, {data.location.region}</h3>
			</div>
			<div>
				<h2>Timezone</h2>
				<h3>UTC {data.location.timezone}</h3>
			</div>
			<div>
				<h2>ISP</h2>
				<h3>{data.as.name}</h3>
			</div>
		</Container>
	)
}