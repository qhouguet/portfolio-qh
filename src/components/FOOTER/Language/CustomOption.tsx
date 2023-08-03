import { countryFlag } from 'src/models/enum/CountryFlag';
import { LanguageEnum } from 'src/models/enum/Language';

type Props = {
	selectedLang: LanguageEnum;
	language: string;
	handleLanguageSelection: (language: LanguageEnum) => void;
};

export const CustomOption = ({ selectedLang, language, handleLanguageSelection }: Props) => {
	return (
		<div
			className={`${selectedLang === language ? 'hidden' : ''} flex`}
			onClick={() => handleLanguageSelection(language as LanguageEnum)}
		>
			<img
				alt={`${language} flag`}
				src={countryFlag[language as LanguageEnum]}
				className="w-6 pt-px"
			/>
			<span className="px-2">{language}</span>
		</div>
	);
};
