import styled from 'styled-components';
import mainBg from '../../media/main-bg.png';

export const Wrapper = styled.div`
	margin-top: calc(95px - 36px);
	background-image: url(${mainBg});
	background-size: cover;
	background-position: bottom;
	background-repeat: no-repeat;
	width: 100%;
	height: 680px;
`;
export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 90%;
`;

export const Logo = styled.img``;
export const Slogan = styled.span`
	color: var(--logo-color-main);
	font-size: 4em;
	text-transform: uppercase;
	text-align: center;
`;
