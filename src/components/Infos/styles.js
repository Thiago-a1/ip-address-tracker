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

	@media (min-width: 840px) {
		flex-direction: row;
		justify-content: space-between;

		width: 100%;
		height: 160px;
		padding: 32px 32px 32px 10px;

		div {
			max-width: 220px;

			padding-left: 22px;
			word-wrap: unset;
		}

		div + div{
			border-left: 1px solid var(--Secondary-color);
		}

		div h2, h3 {
			text-align: start;
		}
	}

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

		h3 {
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
`;