import styled from 'styled-components';

const StyledIcon = styled.div`
	width: 50px;
	margin-top: 3rem;
	margin-bottom: 2.2rem;
	position: relative;

	&::after {
		content: '';
		width: 50px;
		height: 50px;
		background-color: black;
		border-radius: 50%;
		position: absolute;
		opacity: 0.25;
	}
`;

export { StyledIcon };
