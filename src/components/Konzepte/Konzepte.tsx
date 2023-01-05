import { Wrapper, Content, Title, ConceptBlock } from './styles';
import Concept_1 from '../../media/concepts/concept_1.png';
import Concept_2 from '../../media/concepts/concept_2.png';
import Concept_3 from '../../media/concepts/concept_3.png';
import Concept_4 from '../../media/concepts/concept_4.png';
import Concept_5 from '../../media/concepts/concept_5.png';
import Concept_6 from '../../media/concepts/concept_6.png';
import Concept_7 from '../../media/concepts/concept_7.png';
import Concept_8 from '../../media/concepts/concept_8.png';
import Concept_9 from '../../media/concepts/concept_9.png';
import { Images } from './components/Images';

const AllConcepts: string[] = [
	Concept_1,
	Concept_2,
	Concept_3,
	Concept_4,
	Concept_5,
	Concept_6,
	Concept_7,
	Concept_8,
	Concept_9,
];

const Konzepte = () => {
	return (
		<Wrapper>
			<Content className='container'>
				<Title>Konzepte</Title>
				<ConceptBlock>
					<Images allConcepts={AllConcepts} />
				</ConceptBlock>
			</Content>
		</Wrapper>
	);
};

export default Konzepte;
