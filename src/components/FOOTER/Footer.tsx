import { useDataContext } from 'src/context/data';
import { LanguageSelection } from './Language/LanguageSelection';
import { Social } from './Social/Social';
import { Contact } from './Contact';

export const Footer = () => {
	const [t] = useDataContext();

	const COPYRIGHT = t('FOOTER.CONTACT.COPYRIGHT');

	return (
		<footer className="flex flex-col bg-myGreen-neutral px-8 pb-16 pt-8 text-2xl text-myBlack-dark">
			<LanguageSelection />
			<Social />
			<Contact />
			<p className="pb-16 text-center">{COPYRIGHT}</p>
		</footer>
	);
};
