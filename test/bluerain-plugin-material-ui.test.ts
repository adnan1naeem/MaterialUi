import BR, { Plugin } from '@blueeast/bluerain-os';
import IntlPlugin from '@blueeast/bluerain-plugin-intl';
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
		expect(plugin.slug).toEqual('material-ui');
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
	it('Should boot with intl', () => {
		BR.boot({ plugins: [IntlPlugin, MaterialUiPlugin] });
		expect(BR.Plugins.get('intl')).toBeDefined();
	});
	it('should boot with custom config', () => {
		BR.boot({
			plugins: [MaterialUiPlugin],
			config: { plugins: { 'material-ui': 'customConfgi' } }
		});
		expect(BR.Configs.ConfigsTable.plugins['material-ui']).toEqual(
			'customConfgi'
		);
	});
});
