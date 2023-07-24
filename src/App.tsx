import 'styles/App.css';
import { Headings } from './components/Headings';
import data from './data/fr/content.json';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { About } from './components/About';

function App() {
	return (
		<>
			<Header title={data.menu.title} categories={data.menu.categories} />
			<HeroBanner>
				<Headings
					title1={data.mainTitle[0]}
					title2={data.mainTitle[1]}
					subtitle={data.subtitle}
					description={data.introduction}
				/>
			</HeroBanner>
			<About />
		</>
	);
}

export default App;
