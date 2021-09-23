import React from "react";

import Input from '../Input';
import Infos from '../Infos';

import { Container } from "./styles";

export default function DashBoard() {
	return (
		<Container>
			<h1>IP Address Tracker</h1>

			<Input />

			<Infos />
		</Container>
	);
}