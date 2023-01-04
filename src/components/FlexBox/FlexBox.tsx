import React from 'react';
import { StyledFlexBox } from './styles';
import { IFlex } from './types';

const FlexBox: React.FC<React.PropsWithChildren<IFlex>> = ({
	direction,
	align,
	justify,
	margin,
	padding,
	gap,
	wrap,
	display,
	style,
	className,
	fullWidth,
	height,
	children,
}) => (
	<StyledFlexBox
		height={height}
		direction={direction}
		align={align}
		justify={justify}
		margin={margin}
		padding={padding}
		gap={gap}
		className={className}
		wrap={wrap}
		style={style}
		display={display}
		fullWidth={fullWidth}
	>
		{children}
	</StyledFlexBox>
);

export default FlexBox;
