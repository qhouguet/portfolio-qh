import { CustomOption } from './CustomOption';
import { CustomSelect } from './CustomSelect';
import { useDataContext } from 'src/context/data';
import { useState } from 'react';
import { LanguageEnum } from 'src/models/enum/Language';

export const LanguageSelection = () => {
	const [t, changeLanguage] = useDataContext();

	const TITLE = t('FOOTER.LANGUAGE.TITLE');

	const [open, setOpen] = useState(false);
	const [selectedLang, setselectedLang] = useState(LanguageEnum.FR);

	const toggleMenu = () => {
		setOpen(!open);
	};

	const handleLanguageSelection = (language: LanguageEnum) => {
		setselectedLang(language);
		toggleMenu();
		changeLanguage(language);
	};

	return (
		<div>
			<h3 className="font-bold uppercase">{TITLE}</h3>
			<CustomSelect toggleMenu={toggleMenu} selectedLang={selectedLang} open={open} />
			{open && (
				<div className="text-my-green-dark w-1/2 cursor-pointer pl-0.5 text-xl">
					{Object.keys(LanguageEnum).map((language) => (
						<CustomOption
							key={language}
							selectedLang={selectedLang}
							language={language}
							handleLanguageSelection={handleLanguageSelection}
						/>
					))}
				</div>
			)}
		</div>
	);
};
