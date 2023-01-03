import { Content, Logo, Slogan, Wrapper } from './styles';
import LogoImg from '../../media/logo.png';

const MainContent = () => {
	return (
		<Wrapper>
			<Content className='container'>
				<Logo src={LogoImg} />
				<Slogan>
					Gemeinsam Gutes <br />
					besser machen{' '}
				</Slogan>
			</Content>
		</Wrapper>
	);
};

export default MainContent;
