import styled from 'styled-components';

const StyledContainer = styled.div`
	background-color: ${({ color }) => color};
	display: flex;
	flex-direction: column;
	padding-left: 3rem;
	padding-right: 3rem;
`;

export { StyledContainer };
