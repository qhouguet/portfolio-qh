import { useDataContext } from 'src/context/data';
import { LanguageEnum } from 'src/models/enum/Language';
import { useState } from 'react';
import ARROW from 'src/assets/ARROW.svg';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
	const [t, changeLanguage] = useDataContext();
	const [open, setOpen] = useState(false);
	const [selectedLang, setselectedLang] = useState(LanguageEnum.FR);

	const LANGUAGETITLE = t('FOOTER.LANGUAGE.TITLE');
	const SOCIALTITLE = t('FOOTER.SOCIAL.TITLE');
	const CONTACTTITLE = t('FOOTER.CONTACT.TITLE');
	const COPYRIGHT = t('FOOTER.CONTACT.COPYRIGHT');

	const SOCIALLINKS = ['LINKEDIN', 'GITHUB', 'TWITTER'].map((link) => ({
		NAME: t(`FOOTER.SOCIAL.LINKS.${link}.NAME`),
		URL: t(`FOOTER.SOCIAL.LINKS.${link}.URL`)
	}));

	const CONTACTDESCRIPTION = t('FOOTER.CONTACT.DESCRIPTION');

	console.log(SOCIALLINKS);

	// const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
	// 	const selectedLang = event.target.value;
	// 	changeLanguage(selectedLang as LanguageEnum);
	// };

	const countryFlag = {
		[LanguageEnum.EN]: '🇺🇸',
		[LanguageEnum.FR]: '🇫🇷'
	};

	const toggleMenu = () => {
		setOpen(!open);
	};

	const handleLanguageSelection = (language: LanguageEnum) => {
		setselectedLang(language);
		toggleMenu();
		changeLanguage(language);
	};

	return (
		<footer className="flex flex-col bg-myGreen-neutral px-8 pb-16 pt-8 text-2xl text-myBlack-dark">
			<div>
				<h3 className="font-bold uppercase">{LANGUAGETITLE}</h3>
				<div
					className="flex w-1/2 cursor-pointer flex-row items-center pl-0.5 pt-2 text-xl text-myGreen-dark"
					onClick={toggleMenu}
				>
					<span className="pt-px">{countryFlag[selectedLang]}</span>
					<span className="px-2">{selectedLang}</span>
					<img
						src={ARROW}
						alt="Chevron ouverture menu selection langue"
						className={`w-3 self-center pt-0.5 ${open ? 'up' : 'down'}`}
					/>
				</div>
				{open && (
					<div className="w-1/2 cursor-pointer pl-0.5 text-xl text-myGreen-dark">
						{Object.keys(LanguageEnum).map((language) => (
							<div
								key={language}
								className={`${selectedLang === language ? 'hidden' : ''}`}
								onClick={() => handleLanguageSelection(language as LanguageEnum)}
							>
								<span className="pt-px">{countryFlag[language as LanguageEnum]}</span>
								<span className="px-2">{language}</span>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="pt-16">
				<h3 className="font-bold uppercase">{SOCIALTITLE}</h3>
				<div className="flex flex-col text-xl text-myGreen-dark">
					{SOCIALLINKS.map((link) => (
						<SocialLinks NAME={link.NAME} URL={link.URL} key={link.NAME} />
					))}
				</div>
			</div>
			<div className="py-16">
				<h3 className="font-bold uppercase">{CONTACTTITLE}</h3>
				<p className="pt-2 text-xl text-myGreen-dark">
					{CONTACTDESCRIPTION[1]}
					<br />
					<span className="font-semibold text-myBlack-dark">{CONTACTDESCRIPTION[2]}</span>
					{CONTACTDESCRIPTION[3]}
				</p>
			</div>
			<p className="pb-16 text-center">{COPYRIGHT}</p>
		</footer>
	);
};
