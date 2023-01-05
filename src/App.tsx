import './App.css';
import { Brands } from './components/Brands';
import { HeaderMenu } from './components/HeaderMenu';
import { Konzepte } from './components/Konzepte';
import { MainContent } from './components/MainContent';
import { More } from './components/More';
import { Sortiment } from './components/Sortiment';
import { Section } from './styles';

function App() {
	return (
		<div>
			<HeaderMenu />
			<Section>
				<MainContent />
			</Section>
			<Section>
				<Sortiment />
			</Section>
			<Section>
				<More />
			</Section>
			<Section>
				<Konzepte />
			</Section>
			<Section>
				<Brands />
			</Section>
		</div>
	);
}

export default App;
