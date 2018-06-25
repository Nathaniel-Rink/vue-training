import Braveheart from '../components/Braveheart';
import Empire from '../components/Empire';
import Hamlet from '../components/Hamlet';
import WizardOfOz from '../components/WizardOfOz';

export default [
	{
		path: '/',
		redirect: '/brave'
	},
	{
		path: '/brave/:accused/with/:weapon',
		component: Braveheart
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