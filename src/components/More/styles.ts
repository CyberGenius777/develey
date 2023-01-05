import styled from 'styled-components';

import checkImg from '../../media/check.png';

export const Wrapper = styled.div``;
export const Content = styled.div`
	display: grid;
	grid-template-columns: 50% 1fr;
`;

export const Logo = styled.img`
	display: block;
	max-width: 100%;
`;

export const Title = styled.span`
	font-size: 1.6em;
	text-align: center;
	font-weight: var(--main-font-light);
	color: #4a4a4a;
`;

export const Info = styled.div``;

export const ListWrapper = styled.ul`
	position: relative;
	right: 55px;
`;

export const Item = styled.li`
	list-style: none;
	display: flex;
	font-weight: var(--main-font-light);
	align-items: flex-start;
	&:before {
		content: url(${checkImg});
		margin-right: 10px;
	}
`;

export const FirstProductTitle = styled.span`
	font-size: 5em;
	color: var(--logo-color-main);
	font-weight: var(--main-font-bold);
`;

export const SecondProductTitle = styled.span`
	font-size: 5em;
	position: relative;
	bottom: 20px;
	color: var(--logo-color-second);
	font-weight: var(--main-font-bold);
`;
