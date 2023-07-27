import { Header } from './components/HEADER/Header';
import { HeroBanner } from './components/HEADER/HeroBanner';
import { About } from './components/ABOUT/About';
import { useOpenContext } from './context/open';
import { Experience } from './components/EXPERIENCE/Experience';
import { ProjectList } from './components/PROJECTS/ProjectList';
import { Footer } from './components/FOOTER/Footer';

function App() {
	const { open } = useOpenContext();

	return (
		<>
			<Header />
			<div
				className={`w-scren h-screen scroll-smooth ${open ? 'overflow-hidden' : 'overflow-auto'}`}
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
