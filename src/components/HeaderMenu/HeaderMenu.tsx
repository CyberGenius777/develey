import { Content, Wrapper, StyledLink, Logo, Search, Menu } from './styles';

const menuList = ['Sortiment', 'Inspirationen', 'Dispenser-Shop', 'B2B/Industrie', 'Nachhaltigkeit', 'Kontakt'];

const HeaderMenu = () => {
	return (
		<Wrapper>
			<Content className='container'>
				<Logo>logo</Logo>
				<Menu>
					{menuList.map((link) => (
						<StyledLink key={link} href='https://www.google.com'>
							{link}
						</StyledLink>
					))}
				</Menu>
				<Search>search</Search>
			</Content>
		</Wrapper>
	);
};

export default HeaderMenu;
