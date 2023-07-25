import 'styles/App.css';
import { Headings } from './components/Headings';
import data from './data/fr/content.json';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { About } from './components/About';
import { useOpenContext } from './context/open';
import { useEffect } from 'react';
import { Experience } from './components/Experience';

function App() {
	const { open } = useOpenContext();

	useEffect(() => {
		const html = document.querySelector('html');
		if (html) {
			html.style.overflow = open ? 'hidden' : 'auto';
		}
	}, [open]);

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
			<main>
				<About title={data.menu.categories[2]} description={data.about} />
				<Experience
					title1={data.tools.main}
					toolList={data.tools.mainList}
					title2={data.tools.learn}
					learnList={data.tools.learnList}
				/>
			</main>
		</>
	);
}

export default App;
