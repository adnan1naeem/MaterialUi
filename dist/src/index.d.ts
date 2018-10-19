import React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import interfaces from '@blueeast/bluerain-ui-interfaces';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties, ActionProperties } from './components/Card';
import { Badge } from './components/Badge';
import { MUIDividerProperties } from './components/Divider';
import { MUIListItemProperties, MUIListProperties } from './components/List';
import { MUISwitchProperties } from './components/Switch';
import { MUITextInputProperties } from './components/TextInput';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        Badge: typeof Badge;
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<interfaces.CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        CardActionArea: React.StatelessComponent<{}>;
        CardAction: React.StatelessComponent<ActionProperties>;
        Divider: React.StatelessComponent<MUIDividerProperties>;
        List: React.StatelessComponent<MUIListProperties>;
        ListSubheader: React.StatelessComponent<interfaces.ListHeaderProperties>;
        ListItem: React.StatelessComponent<MUIListItemProperties>;
        Switch: React.StatelessComponent<MUISwitchProperties>;
        Slider: React.StatelessComponent<import("src/components/Slider/Slider.component").MUISliderProperties>;
        Stepper: React.StatelessComponent<any>;
        TextInput: React.StatelessComponent<MUITextInputProperties>;
    };
}
export default MaterialUiPlugin;
