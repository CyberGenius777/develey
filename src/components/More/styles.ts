import styled from 'styled-components';
import middleBg from '../../media/middle-bg.png';
import checkImg from '../../media/check.png';

export const Wrapper = styled.div`
	margin-top: calc(95px - 36px);
	background-image: url(${middleBg});
	background-size: cover;
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

export const Title = styled.span`
	font-size: 1.6em;
	text-align: center;
	font-weight: var(--main-font-light);
	color: #4a4a4a;
`;

export const Info = styled.div``;

export const ListWrapper = styled.ul`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

export const Item = styled.li`
	list-style: none;
	display: flex;
	align-items: flex-start;
	&:before {
		content: url(${checkImg});
		margin-right: 10px;
	}
`;

export const FirstProductTitle = styled.span`
	font-size: 4em;
	color: var(--logo-color-main);
	font-weight: var(--main-font-bold);
`;

export const SecondProductTitle = styled.span`
	font-size: 4em;
	position: relative;
	bottom: 20px;
	color: var(--logo-color-second);
	font-weight: var(--main-font-bold);
`;
