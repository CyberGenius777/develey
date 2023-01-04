import { Wrapper, Content, Item, Title, FirstProductTitle, SecondProductTitle, ListWrapper } from './styles';

import { FlexBox } from '../FlexBox';

const More = () => {
	return (
		<Wrapper>
			<Content className='container'>
				<FlexBox fullWidth direction='column' align='flex-end'>
					<FlexBox justify='center' direction='column'>
						<Title>Noh Mehr</Title>
						<FirstProductTitle>SAUCEN-</FirstProductTitle>
						<SecondProductTitle>VIELFALT</SecondProductTitle>
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
