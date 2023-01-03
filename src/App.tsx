import './App.css';
import { HeaderMenu } from './components/HeaderMenu';
import { MainContent } from './components/MainContent';
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
		</div>
	);
}

export default App;
