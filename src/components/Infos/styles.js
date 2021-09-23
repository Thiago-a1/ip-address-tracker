import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	z-index: 2;

	width: 100%;
	border-radius: 16px;
	padding: 32px 0 16px 0;
	background-color: var(--Primary-font-color);

	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 20%);

	div {
		text-align: center;

		height: 64px;
		h2 {
			font-size: 0.7rem;
			text-transform: uppercase;
			letter-spacing: 0.1rem;

			color: var(--Secondary-color);

			margin-bottom: 6px;
		}

		span {
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
`;