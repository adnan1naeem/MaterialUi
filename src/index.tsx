
import Card, { CardBody, CardFooter, CardHeader, CardMedia } from './components/Card';
import { DropDown,DropdownItem } from './components/DropDown/DropDown';
import { Plugin } from '@blueeast/bluerain-os';
import Badge from './components/badge';
import Button from './components/button';
import CarouselComponent from './components/carousel';
import Chip from './components/chip';
import GMap from './components/map';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import TextInput from './components/textInput';



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

	static initialize(config:any = {}, ctx:any) {

		let theme = ctx.Configs.get('theme');
		if (!theme) {
			theme = {};
		}

		ctx.Components.register('TextInput', TextInput);
		ctx.Components.register('Chip', Chip);
		ctx.Components.register('Badge', Badge);
		ctx.Components.register('GMap', GMap);
		ctx.Components.register('Button', Button);
		ctx.Components.register('Card', Card);
		ctx.Components.register('CardHeader', CardHeader);
		ctx.Components.register('CardFooter', CardFooter);
		ctx.Components.register('CardBody', CardBody);
		ctx.Components.register('CardMedia', CardMedia);
		ctx.Components.register('DropDown', DropDown);
		ctx.Components.register('DropdownItem', DropdownItem);
		ctx.Components.register('Carousel', CarouselComponent);

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
