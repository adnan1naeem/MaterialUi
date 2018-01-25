import React from 'react';
import { Plugin, BlueRainType } from '@blueeast/bluerain-os';

import TextInput from './components/TextInput';
import Chip from './components/Chip';
import Badge from './components/Badge';
import Avatar from './components/Avatar';
import Switch from './components/Switch';
import { DropDown, DropdownItem } from './components/DropDown';
import List, { ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText } from './components/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './components/Button';
import IconComponent from './components/Icon';
import Card, { CardHeader, CardBody, CardFooter, CardMedia } from './components/Card';
import Breadcrumb from './components/Breadcrumb';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/withTheme';

// const withMUI = (App, theme, ctx) => (props: { intl: { rtl: string }}) => {
//
// 	if (props.intl !== undefined && props.intl.rtl !== undefined) {
// 		theme.isRtl = props.intl.rtl;
// 	}
//
// 	theme = ctx.Filters.run('material-ui.theme', theme);
// 	const muiTheme = getMuiTheme(theme);
//
// 	const style = { direction: theme.isRtl ? 'rtl' : 'ltr' };
//
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

	static initialize(config:any = {}, ctx:BlueRainType) {

		let theme = ctx.Configs.get('theme');
		if (!theme) {
			theme = {};
		}

		ctx.Components.setOrReplace('TextInput', TextInput);
		ctx.Components.set('Chip', Chip);
		ctx.Components.set('Badge', Badge);
		ctx.Components.set('Dropdown', DropDown);
		ctx.Components.set('DropdownItem', DropdownItem);
		ctx.Components.set('Avatar', Avatar);
		ctx.Components.set('List', List);
		ctx.Components.set('ListItem', ListItem);
		ctx.Components.set('ListHeader', ListHeader);
		ctx.Components.set('ListItemAvatar', ListItemAvatar);
		ctx.Components.set('ListItemIcon', ListItemIcon);
		ctx.Components.set('ListItemText', ListItemText);
		ctx.Components.set('ListItemRightButton', ListItemRightButton);
		ctx.Components.setOrReplace('Button', Button);
		ctx.Components.set('Card', Card);
		ctx.Components.set('CardHeader', CardHeader);
		ctx.Components.set('CardBody', CardBody);
		ctx.Components.set('CardMedia', CardMedia);
		ctx.Components.set('CardFooter', CardFooter);
		ctx.Components.set('Breadcrumb', Breadcrumb);
		ctx.Components.set('SwitchToggle', Switch);
		ctx.Components.set('Icon', IconComponent);

        // Add Material UI Provider
//         	ctx.Filters.add(
//           'bluerain.redux.app',
//       function AddMUI(App) {
//
// 	// const result = withMUI(App, theme, ctx);
//
// 							// Wrap in Intl, if intl plugin is installed
// 	if (ctx.Plugins.get('intl')) {
// 		return ctx.Plugins.get('intl').withIntl(result);
// 	}
// 	return result;
// }
//         );
	}
}

export default MaterialUiPlugin;
