/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				open: ['Open Sans']
			},
			animation: {
				expand: 'expand 200ms linear 3000ms forwards',
				expandReverse: 'expandReverse 200ms linear 3000ms forwards',
				bgFlash: 'bgFlash 3000ms ease-in forwards'
			},
			keyframes: {
				expand: {
					'0%': {
						height: 0,
						top: '100vh'
					},
					'100%': {
						height: '100vh',
						top: 0
					}
				},
				expandReverse: {
					'0%': {
						height: 0
					},
					'100%': {
						height: '100vh'
					}
				},
				bgFlash: {
					'0%': {
						backgroundColor: '#C4D0AE'
					},
					'100%': {
						backgroundColor: '#FFF'
					}
				}
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				myGreen: {
					light: '#fdfff5',
					neutral: '#C4D0AE',
					dark: '#0A3D38'
				},
				myBlack: {
					dark: '#202020'
				},
				myOrange: {
					neutral: '#FD6F63'
				}
			},
			backgroundImage: {
				topography: "url('/images/topography.svg')"
			}
		}
	},
	plugins: []
};
