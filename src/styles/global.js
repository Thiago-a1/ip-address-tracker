import { createGlobalStyle } from "styled-components";

import Bg from '../assets/pattern-bg.png';

export default createGlobalStyle`
	:root {
		--Primary-Background-color: hsl(250, 250%, 250%);
		--Secondary-Background-color: hsl(0, 0%, 5%);

		--Primary-color: hsl(0, 0%, 17%);
		--Secondary-color: hsl(0, 0%, 59%);

		--Primary-font-color: hsl(250, 250%, 250%);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-image: url(${Bg});
		background-size: 150vw 30vh;
		background-repeat: no-repeat;
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Rubik', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 700;
	}

	button {
		cursor: pointer;
	}
`;