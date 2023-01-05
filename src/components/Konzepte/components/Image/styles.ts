import styled from 'styled-components';

export const ImageWrapper = styled.div`
	background: var(--logo-color-main);
	border-radius: 8px;
	position: relative;
	color: white;
	font-family: var(--description-font);
	font-weight: var(--main-font-light);
	&:hover {
		cursor: pointer;
	}
	&:hover img {
		transform: translateY(-50%);
	}
`;

export const ImageSource = styled.img`
	transition: all 0.4s;
	position: relative;
	z-index: 10;
	height: 100%;
`;

export const Description = styled.span`
	position: absolute;
	display: flex;
	align-items: center;
	text-align: center;
	bottom: 0;
	width: 100%;
	z-index: 9;
	height: 47%;
`;
