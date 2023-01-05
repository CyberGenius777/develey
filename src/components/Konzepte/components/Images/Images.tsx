import { Image } from '../Image';

interface IImages {
	allConcepts: string[];
}

const Images: React.FC<IImages> = ({ allConcepts }) => {
	return (
		<>
			{allConcepts.map((concept: string) => (
				<Image key={concept} concept={concept} />
			))}
		</>
	);
};

export default Images;
