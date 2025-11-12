import { useDataContext } from 'src/context/data';
import { LanguageSelection } from './Language/LanguageSelection';
import { Social } from './Social/Social';
import { Contact } from './Contact';

export const Footer = () => {
	const [t] = useDataContext();

	const creationYear = 2023;
	const currentYear = new Date().getFullYear();

	const COPYRIGHT = `${t('FOOTER.CONTACT.COPYRIGHT-1')} ${creationYear}-${currentYear} ${t(
		'FOOTER.CONTACT.COPYRIGHT-2'
	)}`;

	return (
		<footer className="bg-my-green-neutral flex flex-col px-8 pb-16 pt-8 lg:py-8">
			<div className="text-my-black-dark flex flex-col text-2xl lg:mx-auto lg:w-full lg:max-w-screen-xl lg:flex-row lg:justify-between lg:pb-16">
				<LanguageSelection />
				<Social />
				<Contact />
			</div>
			<p className="pb-16 text-center lg:pb-0">{COPYRIGHT}</p>
		</footer>
	);
};
