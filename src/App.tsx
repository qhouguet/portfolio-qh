import { Header } from './components/HEADER/Header';
import { HeroBanner } from './components/HEADER/HeroBanner';
import { About } from './components/ABOUT/About';
import { useOpenContext } from './context/open';
import { Experience } from './components/EXPERIENCE/Experience';

function App() {
	const { open } = useOpenContext();

	return (
		<>
			<Header />
			<div className={`w-scren h-screen ${open ? 'overflow-hidden' : 'overflow-auto'}`}>
				<HeroBanner />
				<main>
					<About />
					<Experience />
				</main>
			</div>
		</>
	);
}

export default App;
