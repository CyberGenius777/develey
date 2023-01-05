import { Wrapper, Content, Item, Title, Logo, FirstProductTitle, SecondProductTitle, ListWrapper } from './styles';
import middleBg from '../../media/middle-bg.webp';
import { FlexBox } from '../FlexBox';

const More = () => {
	return (
		<Wrapper>
			<Content className=''>
				<Logo src={middleBg} />
				<FlexBox fullWidth direction='column' align='center' justify='center' height='100%'>
					<Title>Noh Mehr</Title>
					<FirstProductTitle>SAUCEN-</FirstProductTitle>
					<SecondProductTitle>VIELFALT</SecondProductTitle>
					<FlexBox fullWidth justify='center' align='center'>
						<ListWrapper>
							<Item>ungekühlt haltbar</Item>
							<Item>
								ohne Zusatzstoffkennzeichnung <br /> auf der Speisekarte
							</Item>
						</ListWrapper>
					</FlexBox>
				</FlexBox>
			</Content>
		</Wrapper>
	);
};

export default More;
