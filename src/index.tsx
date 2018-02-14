import * as React from 'react';
import Card, { CardHeader, CardBody, CardFooter, CardMedia } from './components/Card';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Breadcrumb from './components/Breadcrumb';
import Button from './components/Button';
import Chip from './components/Chip';
import { DropDown, DropdownItem } from './components/DropDown';
import IconComponent from './components/Icon';
import { Plugin, BlueRainType } from '@blueeast/bluerain-os';
import Switch from './components/Switch';
import TextInput from './components/TextInput';
import List, { ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText } from './components/List';

/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
class MaterialUiPlugin extends Plugin {

	static pluginName = 'MaterialUiPlugin';
	static slug = 'material-ui';

	static components = {
		'TextInput': TextInput,
		'Chip': Chip,
		'Badge': Badge,
		'Dropdown': DropDown,
		'DropdownItem': DropdownItem,
		'Avatar': Avatar,
		'List': List,
		'ListItem': ListItem,
		'ListHeader': ListHeader,
		'ListItemAvatar': ListItemAvatar,
		'ListItemIcon': ListItemIcon,
		'ListItemText': ListItemText,
		'ListItemRightButton': ListItemRightButton,
		'Button': Button,
		'Card': Card,
		'CardHeader': CardHeader,
		'CardBody': CardBody,
		'CardMedia': CardMedia,
		'CardFooter': CardFooter,
		'Breadcrumb': Breadcrumb,
		'SwitchToggle': Switch,
		'Switch': Switch,
		'Icon': IconComponent,
	};
	
// 	static initialize(config:any = {}, ctx:BlueRainType) {

// 		let theme = ctx.Configs.get('theme');
// 		if (!theme) {
// 			theme = {};
// 		}

//         // Add Material UI Provider
// //         	ctx.Filters.add(
// //           'bluerain.redux.app',
// //       function AddMUI(App) {
// //
// // 	// const result = withMUI(App, theme, ctx);
// //
// // 							// Wrap in Intl, if intl plugin is installed
// // 	if (ctx.Plugins.get('intl')) {
// // 		return ctx.Plugins.get('intl').withIntl(result);
// // 	}
// // 	return result;
// // }
// //         );
// 	}
}

export default MaterialUiPlugin;
