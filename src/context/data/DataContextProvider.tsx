import { useState, createContext, PropsWithChildren, useCallback } from 'react';
import contentFR from '../../data/fr/content.json';
import contentEN from '../../data/en/content.json';
import { at } from 'lodash';

enum LanguageEnum {
	EN = 'EN',
	FR = 'FR'
}

type DataContext = [(path: string) => string, (l: LanguageEnum) => void];

export const DataContextProvider = ({ children }: PropsWithChildren) => {
	const [language, setLanguage] = useState(LanguageEnum.FR);

	const t = useCallback(
		(path: string) => {
			switch (language) {
				case LanguageEnum.EN:
					return at(contentEN, path)[0] as unknown as string;
				case LanguageEnum.FR:
					return at(contentFR, path)[0] as unknown as string;
				default:
					console.error('Unhandled...');
					return '';
			}
		},
		[language]
	);

	const changeLanguage = (l: LanguageEnum) => setLanguage(l);

	return <Context.Provider value={[t, changeLanguage]}>{children}</Context.Provider>;
};

export const Context = createContext<DataContext>([() => '', () => {}]);
