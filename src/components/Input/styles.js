import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;

	z-index: 2;

	width: 100%;
	height: 56px;
	margin: 32px auto 24px auto;

	border-radius: 16px;

	background-color: var(--Primary-Background-color);

	@media (min-width: 840px) {
		width: 66.7%;

		margin-bottom: 32px;
	}

	@media (min-width: 1140px) {
		width: 57.1%;
	}

	input {
		flex: 5;

		font-size: 1.1rem;
		margin-left: 16px;
		border: none;

		outline: none;

		&::placeholder {
			color: var(--Secondary-color);
		}
	}

	button {
		flex: 1;

		height: 100%;
		border-radius: 0 16px 16px 0;
		border: none;

		background-color: var(--Secondary-Background-color);

		&:hover {
			background-color: var(--Primary-color);
		}
	}
`;