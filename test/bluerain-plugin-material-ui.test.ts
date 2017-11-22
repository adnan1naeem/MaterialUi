import BR, { Plugin } from '@blueeast/bluerain-os';
// tslint:disable-next-line:no-implicit-dependencies
import React from 'react';
import MaterialUiPlugin from '../src/index';

beforeEach(() => {
	document.body.innerHTML = '<div class="app-container">' + '</div>';
});

describe('material-ui Plugin Test', () => {
	it('should register plugin successfully', () => {
		BR.Plugins.register(MaterialUiPlugin);
		const plugin = BR.Plugins.get(MaterialUiPlugin.slug);
		expect(plugin).toBeTruthy();
	});

	it('should   return  undefined theme ', () => {
		BR.boot();
		expect(BR.Configs.get('theme')).toBeUndefined();
	});

	it('should   return defined theme', () => {
		const theme = {
			color: 'black',
			isRtl: ''
		};

		BR.Configs.set('theme', theme);
		BR.boot();

		expect(BR.Configs.get('theme')).toEqual(theme);
	});
});
