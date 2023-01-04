import styled from 'styled-components';
import { IFlex } from './types';

export const StyledFlexBox = styled.div<IFlex>`
	flex-direction: ${({ direction }) => direction || 'row'};
	align-items: ${({ align }) => align || 'stretch'};
	justify-content: ${({ justify }) => justify || 'stretch'};
	margin: ${({ margin }) => margin || '0'};
	padding: ${({ padding }) => padding || '0'};
	gap: ${({ gap }) => gap || '0'};
	flex-wrap: ${({ wrap }) => wrap || 'no-wrap'};
	display: ${({ display }) => display || 'flex'};
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
	height: ${({ height }) => (height ? height : 'auto')};
`;
