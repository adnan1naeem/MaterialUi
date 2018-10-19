import React from 'react';
import { MUIAppBarProperties } from './components/AppBar';
import { Plugin } from '@blueeast/bluerain-os';
import interfaces from '@blueeast/bluerain-ui-interfaces';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties, ActionProperties } from './components/Card';
import { MUIDividerProperties } from './components/Divider';
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
        Avatar: React.ComponentType<any>;
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<interfaces.CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        CardActionArea: React.StatelessComponent<{}>;
        CardAction: React.StatelessComponent<ActionProperties>;
        Divider: React.StatelessComponent<MUIDividerProperties>;
        Menu: React.StatelessComponent<interfaces.MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        MenuList: React.StatelessComponent<MenuListprops>;
        MenuPopper: React.StatelessComponent<MenuPopperprops>;
        Switch: React.StatelessComponent<MUISwitchProperties>;
        Slider: React.StatelessComponent<import("./components/Slider/Slider.component").MUISliderProperties>;
        Stepper: React.StatelessComponent<any>;
    };
}
export default MaterialUiPlugin;
