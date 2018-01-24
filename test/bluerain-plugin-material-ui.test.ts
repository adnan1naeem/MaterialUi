import BR, { Plugin } from '@blueeast/bluerain-os';
import IntlPlugin from '@blueeast/bluerain-plugin-intl';
import MaterialUiPlugin from '../src/index';

import React from 'react';

beforeEach(() => {
	document.body.innerHTML = '<div class="app-container">' + '</div>';
});

class Reactxp extends Plugin {
	static pluginName = Reactxp;
	static slug = 'hello-world';

	static initialize(config: {}, ctx: any) {
		console.log('dummy platform');
	}
}

describe('material-ui Plugin Test', () => {
	it('registered the plugin successfully', () => {
		BR.Plugins.set(MaterialUiPlugin);
		BR.boot({ platform: [Reactxp], renderApp: false });
		const plugin = BR.Plugins.get(MaterialUiPlugin.slug);
		expect(plugin.slug).toEqual('material-ui');
	});

	// it('should   return  undefined theme ', () => {
	// 	expect(BR.Configs.get('theme')).toBeUndefined();
	// });

	// it('should   return defined theme', () => {
	// 	const theme = {
	// 		color: 'black',
	// 		isRtl: ''
	// 	};

	// 	BR.Configs.set('theme', theme);

	// 	expect(BR.Configs.get('theme')).toEqual(theme);
	// });
	// it('Should boot with intl', () => {
	// 	BR.boot({ plugins: [IntlPlugin, MaterialUiPlugin] });
	// 	expect(BR.Plugins.get('intl')).toBeDefined();
	// });
	// it('should boot with custom config', () => {
	// 	BR.boot({
	// 		plugins: [MaterialUiPlugin],
	// 		config: { plugins: { 'material-ui': 'customConfgi' } }
	// 	});
	// 	expect(BR.Configs.ConfigsTable.plugins['material-ui']).toEqual(
	// 		'customConfgi'
	// 	);
	// });
});
