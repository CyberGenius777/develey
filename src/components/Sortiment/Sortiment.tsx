import React, { useCallback } from 'react';
import { Content, Goods, Title, Wrapper } from './styles';
import Senf from '../../media/sortiment/Senf.png';
import Mayonnaise from '../../media/sortiment/Mayonnaise.png';
import Ketchup from '../../media/sortiment/Ketchup.png';
import Saucen from '../../media/sortiment/Saucen.png';
import Dressings from '../../media/sortiment/Dressings.png';
import Meerrettich from '../../media/sortiment/Meerrettich.png';
import Tortillas from '../../media/sortiment/Tortillas.png';
import Eingelegtes from '../../media/sortiment/Eingelegtes.png';
import Essig from '../../media/sortiment/Essig.png';
import Dispenser from '../../media/sortiment/Dispenser.png';

const goods = [Senf, Mayonnaise, Ketchup, Saucen, Dressings, Meerrettich, Tortillas, Eingelegtes, Essig, Dispenser];

const Sortiment = () => {
	const RenderGoods = useCallback((image: string) => <img src={image} alt={image} />, []);

	return (
		<Wrapper>
			<Content className='container'>
				<Title>Unser Sortiment</Title>
				<Goods>
					{goods.map((imageLink: string, index: number) => (
						<React.Fragment key={index}>{RenderGoods(imageLink)}</React.Fragment>
					))}
				</Goods>
			</Content>
		</Wrapper>
	);
};

export default Sortiment;
