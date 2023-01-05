import { useState } from 'react';
import { ImageSource, ImageWrapper, Description } from './styles';

interface IImageProps {
	concept: string;
}

const Image: React.FC<IImageProps> = ({ concept }) => {
	const [description] = useState(
		'Lorem ipsum dolor sit amet consectetur. Convallis venenatis magna porta et fringilla.Lorem ipsum dolor sit amet consectetur.'
	);

	return (
		<ImageWrapper>
			<ImageSource src={concept} alt={concept} />
			<Description>{description}</Description>
		</ImageWrapper>
	);
};

export default Image;
