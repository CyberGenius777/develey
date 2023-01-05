import styled from 'styled-components';
import fixedBg from '../../media/fixed-top-background.png';

export const Wrapper = styled.div`
	background-image: url(${fixedBg});
	background-size: auto;
	height: 95px;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 999;
`;
export const Content = styled.div`
	display: flex;
	align-items: center;
	height: 80%;
	color: white;
`;

export const Logo = styled.div`
	width: 18%;
`;

export const Menu = styled.div`
	display: flex;
	justify-content: space-around;
	width: 70%;
	margin: 0 2%;
`;
export const Search = styled.div`
	width: 8%;
	display: flex;
	justify-content: flex-end;
`;

export const StyledLink = styled.a`
	text-decoration: none;
	color: white;
`;
