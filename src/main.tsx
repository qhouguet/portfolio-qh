import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'styles/index.css';
import { OpenContextProvider } from './context/open/OpenContextProvider.tsx';
import { DataContextProvider } from './context/data/DataContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<DataContextProvider>
			<OpenContextProvider>
				<App />
			</OpenContextProvider>
		</DataContextProvider>
	</React.StrictMode>
);
