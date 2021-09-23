import { useContext, useState } from 'react';

import { IpContext } from '../../context/IpContext';

import Arrow from '../../assets/icon-arrow.svg';

import { Container } from "./styles";

export default function Input() {
	const [ip, setIp] = useState('');
	const { getData } = useContext(IpContext);


	function handleSubmit (event) {
		event.preventDefault()

		getData(ip);
	}

	return (
		<Container onSubmit={handleSubmit}>
			<input 
				type="text" 
				placeholder="Search for any IP address or domain"
				onChange={(event) => setIp(event.target.value)}
			/>

			<button type="submit">
				<img src={Arrow} alt="arrow" />
			</button>
		</Container>
	);
}