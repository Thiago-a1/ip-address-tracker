import { useContext } from 'react';

import { IpContext } from '../../context/IpContext';

import { Container } from './styles';

export default function Infos () {
	const { data } = useContext(IpContext);

	return (
		<Container>
			<div>
				<h2>Ip Address</h2>
				<span>{data.ip}</span>
			</div>
			<div>
				<h2>Location</h2>
				<span>{data.location.city}, {data.location.region}</span>
			</div>
			<div>
				<h2>Timezone</h2>
				<span>UTC {data.location.timezone}</span>
			</div>
			<div>
				<h2>ISP</h2>
				<span>{data.as.name}</span>
			</div>
		</Container>
	)
}