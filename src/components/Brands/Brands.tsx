import React, { useCallback } from 'react';
import { Content, Goods, Title, Wrapper } from './styles';
import Aiko from '../../media/brands/aiko-logo.png';
import Bautzner from '../../media/brands/bautzner_logo.png';
import Bbque from '../../media/brands/bbque-logo.png';
import DeveleyOriginal from '../../media/brands/develey-original-logo.png';
import Dijona from '../../media/brands/dijona-logo.png';
import Funtastic from '../../media/brands/funtastic-logo.png';
import Kikkoman from '../../media/brands/kikkoman_logo.png';
import Kochs from '../../media/brands/kochs-logo.png';
import Loewensenf from '../../media/brands/loewensenf-logo.png';
import Tabasxo from '../../media/brands/tabasxo-logo.png';

const brands = [Aiko, Bautzner, Bbque, DeveleyOriginal, Dijona, Funtastic, Kikkoman, Kochs, Loewensenf, Tabasxo];

const Brands = () => {
	const RenderBrands = useCallback((image: string) => <img src={image} alt={image} width='100%' />, []);

	return (
		<Wrapper>
			<Content className='container'>
				<Title>Unsere Marken</Title>
				<Goods>
					{brands.map((imageLink: string, index: number) => (
						<React.Fragment key={index}>{RenderBrands(imageLink)}</React.Fragment>
					))}
				</Goods>
			</Content>
		</Wrapper>
	);
};

export default Brands;
