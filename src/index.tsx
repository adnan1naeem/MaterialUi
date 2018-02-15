import * as React from 'react';
import Card, { CardHeader, CardBody, CardFooter, CardMedia } from './components/Card';
import List, { ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText } from './components/List';
import AppBar from './components/AppBar';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Breadcrumb from './components/Breadcrumb';
import Button from './components/Button';
import Chip from './components/Chip';
import Carousel from './components/Carousel';
import Divider from './components/Divider';
import { DropDown, DropdownItem } from './components/DropDown';
import IconComponent from './components/Icon';
import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
import Switch from './components/Switch';
import TextInput from './components/TextInput';




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
		ctx.Components.setOrReplace('Chip', Chip);
		ctx.Components.setOrReplace('Badge', Badge);
		ctx.Components.setOrReplace('Dropdown', DropDown);
		ctx.Components.setOrReplace('DropdownItem', DropdownItem);
		ctx.Components.setOrReplace('Avatar', Avatar);
		ctx.Components.setOrReplace('List', List);
		ctx.Components.setOrReplace('ListItem', ListItem);
		ctx.Components.setOrReplace('ListHeader', ListHeader);
		ctx.Components.setOrReplace('ListItemAvatar', ListItemAvatar);
		ctx.Components.setOrReplace('ListItemIcon', ListItemIcon);
		ctx.Components.setOrReplace('ListItemText', ListItemText);
		ctx.Components.setOrReplace('ListItemRightButton', ListItemRightButton);
		ctx.Components.setOrReplace('Button', Button);
		ctx.Components.setOrReplace('Card', Card);
		ctx.Components.setOrReplace('CardHeader', CardHeader);
		ctx.Components.setOrReplace('CardBody', CardBody);
		ctx.Components.setOrReplace('CardMedia', CardMedia);
		ctx.Components.setOrReplace('CardFooter', CardFooter);
		ctx.Components.setOrReplace('Breadcrumb', Breadcrumb);
		ctx.Components.setOrReplace('SwitchToggle', Switch);
		ctx.Components.setOrReplace('Icon', IconComponent);
		ctx.Components.setOrReplace('Carousel', Carousel);
		ctx.Components.setOrReplace('Divider', Divider);
		ctx.Components.setOrReplace('AppBar', AppBar);


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
