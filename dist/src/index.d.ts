/// <reference types="react" />
import React from 'react';
import { MUIAppBarProperties } from './components/AppBar';
import { Plugin } from '@blueeast/bluerain-os';
import Pslugin from '@blueeast/bluerain-ui-interfaces';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties, ActionProperties } from './components/Card';
import { MUISwitchProperties } from './components/Switch';
import { MenuItemProperties, MenuListprops, MenuPopperprops } from './components/Menu';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        AppBar: React.StatelessComponent<MUIAppBarProperties>;
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<Pslugin.CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        CardActionArea: React.StatelessComponent<{}>;
        CardAction: React.StatelessComponent<ActionProperties>;
        Menu: React.StatelessComponent<Pslugin.MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        MenuList: React.StatelessComponent<MenuListprops>;
        MenuPopper: React.StatelessComponent<MenuPopperprops>;
        Switch: React.StatelessComponent<MUISwitchProperties>;
    };
}
export default MaterialUiPlugin;
