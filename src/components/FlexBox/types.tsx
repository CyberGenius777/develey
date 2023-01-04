import { CSSProperties } from 'react';

export interface IFlex {
	direction?: CSSProperties['flexDirection'];
	align?: CSSProperties['alignItems'];
	justify?: CSSProperties['justifyContent'];
	margin?: CSSProperties['margin'];
	padding?: CSSProperties['padding'];
	gap?: CSSProperties['gap'];
	wrap?: CSSProperties['flexWrap'];
	display?: 'flex' | 'inline-flex';
	height?: CSSProperties['height'];
	style?: CSSProperties;
	className?: string;
	fullWidth?: boolean;
}
