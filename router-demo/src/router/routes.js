import Braveheart from '../components/Braveheart';
import Empire from '../components/Empire';
import Hamlet from '../components/Hamlet';
import WizardOfOz from '../components/WizardOfOz';
import EasterEgg from '../components/EasterEgg';

export default [
	{
		path: '/',
		redirect: '/brave'
	},
	{
		path: '/brave/:accused/with/:weapon',
		component: Braveheart,
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