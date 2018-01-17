import React from 'react';
import { Plugin, bluerainType } from '@blueeast/bluerain-os';

import TextInput from './components/textInput';
import Chip from './components/chip';
import MapComponent from './components/map';
import Badge from './components/badge';
import Button from './components/button';
import Dropdown from './components/DropDown';
import Avatar from './components/avatar';
import Card, {CardBody, CardFooter, CardHeader, CardMedia} from './components/Card';
import List, {ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText} from './components/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/withTheme';

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

    static initialize(config:any = {}, BR:bluerainType) {

        let theme = BR.Configs.get('theme');
        if (!theme) {
            theme = {};
        }

        BR.Components.register('TextInput', TextInput);
        BR.Components.register('Chip', Chip);
        BR.Components.register('Badge', Badge);
        BR.Components.register('MapComponent', MapComponent);
        BR.Components.register('Button', Button);
        BR.Components.register('Avatar', Avatar);
        BR.Components.register('Dropdown', Dropdown);
        BR.Components.register('Card', Card);
        BR.Components.register('CardHeader', CardHeader);
        BR.Components.register('CardBody', CardBody);
        BR.Components.register('CardMedia', CardMedia);
        BR.Components.register('CardFooter', CardFooter);
		BR.Components.register('Avatar', Avatar);
        BR.Components.register('List', List);
        BR.Components.register('ListItem', ListItem);
        BR.Components.register('ListHeader', ListHeader);
        BR.Components.register('ListItemAvatar', ListItemAvatar);
        BR.Components.register('ListItemIcon', ListItemIcon);
        BR.Components.register('ListItemText', ListItemText);
        BR.Components.register('ListItemRightButton', ListItemRightButton);

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
}

export default MaterialUiPlugin;
