
import React from 'react';
import { Plugin, bluerainType } from '@blueeast/bluerain-os';

<<<<<<< HEAD
import TextInput from './components/TextInput';
=======
import Chip from './components/chip';
import Badge from './components/badge';
>>>>>>> cbe65cfc6ee22a49a8d116e628898bfadcc7a5c2
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/withTheme';

// const withMUI = (App, theme, ctx) => (props: { intl: { rtl: string }}) => {

// 	if (props.intl !== undefined && props.intl.rtl !== undefined) {
// 		theme.isRtl = props.intl.rtl;
// 	}

// 	theme = ctx.Filters.run('material-ui.theme', theme);
// 	const muiTheme = getMuiTheme(theme);

// 	const style = { direction: theme.isRtl ? 'rtl' : 'ltr' };

// 	return (<MuiThemeProvider muiTheme={muiTheme}><App {...props} style={style} /></MuiThemeProvider>);
// };

/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
class MaterialUiPlugin extends Plugin {

    static pluginName = 'MaterialUiPlugin';
    static slug = 'material-ui';

<<<<<<< HEAD
	static initialize(config = {}, BR:bluerainType) {

		let theme = BR.Configs.get('theme');
		if (!theme) {
			theme = {};
        }

        BR.Components.register('TextInput', TextInput);

		// Add Material UI Provider
	// 	ctx.Filters.add(
    //   'bluerain.redux.app',
//       function AddMUI(App) {

// 	// const result = withMUI(App, theme, ctx);

// 							// Wrap in Intl, if intl plugin is installed
// 	if (ctx.Plugins.get('intl')) {
// 		return ctx.Plugins.get('intl').withIntl(result);
// 	}

// 	return result;
// }
		// );
	}
=======
    static initialize(config:any = {}, BR:bluerainType) {

        let theme = BR.Configs.get('theme');
        if (!theme) {
            theme = {};
        }

        BR.Components.register('Chip', Chip);
        BR.Components.register('Badge', Badge);

        // Add Material UI Provider
        // 	ctx.Filters.add(
        //   'bluerain.redux.app',
//       function AddMUI(App) {

// 	// const result = withMUI(App, theme, ctx);

// 							// Wrap in Intl, if intl plugin is installed
// 	if (ctx.Plugins.get('intl')) {
// 		return ctx.Plugins.get('intl').withIntl(result);
// 	}

// 	return result;
// }
        // );
    }
>>>>>>> cbe65cfc6ee22a49a8d116e628898bfadcc7a5c2
}

export default MaterialUiPlugin;