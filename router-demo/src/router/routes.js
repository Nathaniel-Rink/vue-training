import Braveheart from '../components/Braveheart';
import Empire from '../components/Empire';
import Hamlet from '../components/Hamlet';
import WizardOfOz from '../components/WizardOfOz';
import EasterEgg from '../components/EasterEgg';

export default [
	{
		path: '/',
		redirect: '/empire'
	},
	{
		path: '/brave/:accused/with/:weapon',
		component: Braveheart,
		beforeEnter: (to, from, next) => {
			console.log('BEFORE ENTER - I am a per-route route guard. I should flash after beforeEach but before beforeResolve!'); //NRHG
			next();
		},
		children: [
			{
				path: 'easter-egg',
				component: EasterEgg
			}
]
	},
	{
		path: '/empire/:accused/with/:weapon',
		component: Empire
	},
	{
		path: '/mel/:accused/with/:weapon',
		component: Hamlet
	},
	{
		path: '/wiz/:accused/with/:weapon',
		component: WizardOfOz
	}
];