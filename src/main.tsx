import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'styles/index.css';
import { OpenContext } from './context/open';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<OpenContext>
			<App />
		</OpenContext>
	</React.StrictMode>
);
