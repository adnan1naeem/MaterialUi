import commonBootOptions from '../common/bluerain';
import deepmerge from 'deepmerge';
import DummyPlugin from './sample';
import MaterialUI from '../../src';
import { BootOptions } from '@blueeast/bluerain-os';

// TODO: Only for evaluation, remove this

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: BootOptions = {

	plugins: [
		// TODO: Only for evaluation, remove this
		DummyPlugin,
		MaterialUI
	],
	config: {

		wallpaper: {
			backgroundColor: 'white',
			resizeMode: 'cover',
			source: require('./../../assets/storybook/wallpaper.jpg'),
		},
	}
};

export default deepmerge(commonBootOptions, bootOptions) as any;
