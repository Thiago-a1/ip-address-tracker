import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;

	width: 375px;
	margin: 32px auto;

	@media (min-width: 840px) {
		width: 840px;
	}

	@media (min-width: 1140px) {
		width: 980px;
	}

	h1 {
		font-size: 1.8rem;
		text-align: center;
		font-weight: 500;
		color: var(--Primary-font-color);
	}
`;