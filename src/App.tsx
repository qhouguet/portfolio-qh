import { Header } from './components/Header/Header';
import { HeroBanner } from './components/Header/HeroBanner';
import { About } from './components/About/About';
import { useOpenContext } from './context/open';
import { Experience } from './components/Experience/Experience';
import { ProjectList } from './components/Projects/ProjectList';
import { Footer } from './components/Footer/Footer';

function App() {
	const { open } = useOpenContext();

	/* La div nous permet d'empêcher le scroll lors du passage en mode "menu" sur la version mobile */

	return (
		<>
			<Header />
			<div
				className={`w-scren h-screen scroll-smooth ${
					open ? 'overflow-hidden' : 'overflow-auto'
				} lg:overflow-auto`}
			>
				<HeroBanner />
				<main>
					<About />
					<Experience />
					<ProjectList />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
