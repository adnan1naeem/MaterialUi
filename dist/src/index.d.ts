import React from 'react';
import { MUIAppBarProperties } from './components/AppBar';
import { Plugin } from '@blueeast/bluerain-os';
import interfaces from '@blueeast/bluerain-ui-interfaces';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties, ActionProperties } from './components/Card';
import { ColorPicker } from './components/ColorPicker';
import { Badge } from './components/Badge';
import { MUIDividerProperties } from './components/Divider';
import { MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
import { MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
import { MUIListItemProperties, MUIListProperties } from './components/List';
import { MUISwitchProperties } from './components/Switch';
import { MUITextInputProperties } from './components/TextInput';
import { MenuItemProperties, MenuListprops, MenuPopperprops } from './components/Menu';
import { MuiButtonProperties } from './components/Button';
import { CardViewMedia } from './components/CardViewMedia';
import { MUITypographyProperties } from './components/Text';
import { MUIProps } from './components/Checkbox';
import { MUISliderProperties } from './components/Slider';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        AppBar: React.FunctionComponent<MUIAppBarProperties>;
        Avatar: React.ComponentType<any>;
        Badge: typeof Badge;
        Button: React.FunctionComponent<MuiButtonProperties>;
        Card: React.FunctionComponent<MUICardProperties>;
        CardHeader: React.FunctionComponent<MUICardHeaderProperties>;
        CardBody: React.FunctionComponent<MUICardBodyProperties>;
        CardMedia: React.FunctionComponent<interfaces.CardMediaProperties>;
        CardFooter: React.FunctionComponent<MUICardFooterProperties>;
        CardActionArea: React.FunctionComponent<{}>;
        CardAction: React.FunctionComponent<ActionProperties>;
        Chip: React.FunctionComponent<interfaces.ChipProperties>;
        Checkbox: (props: MUIProps) => JSX.Element;
        ColorPicker: typeof ColorPicker;
        Divider: React.FunctionComponent<MUIDividerProperties>;
        Drawer: React.FunctionComponent<any>;
        Menu: React.FunctionComponent<interfaces.MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.FunctionComponent<MenuItemProperties>;
        MenuList: React.FunctionComponent<MenuListprops>;
        MenuPopper: React.FunctionComponent<MenuPopperprops>;
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        ModalBodyText: React.ComponentType<any>;
        'DropDown': React.FunctionComponent<MUIPickerProperties>;
        'DropDownItem': React.FunctionComponent<MUIDropdownItem>;
        List: React.FunctionComponent<MUIListProperties>;
        ListSubheader: React.FunctionComponent<interfaces.ListHeaderProperties>;
        ListItem: React.FunctionComponent<MUIListItemProperties>;
        Switch: React.FunctionComponent<MUISwitchProperties>;
        Slider: React.FunctionComponent<MUISliderProperties>;
        Stepper: React.FunctionComponent<any>;
        FormControl: React.FunctionComponent<MUIFormControlProperties>;
        FormGroup: React.FunctionComponent<MUIFormGroupProperties>;
        TextInput: React.FunctionComponent<MUITextInputProperties>;
        Text: React.FunctionComponent<MUITypographyProperties>;
        H1: React.FunctionComponent<{
            style?: object;
        }>;
        H2: React.FunctionComponent<{
            style?: object;
        }>;
        H3: React.FunctionComponent<{
            style?: object;
        }>;
        H4: React.FunctionComponent<{
            style?: object;
        }>;
        H5: React.FunctionComponent<{
            style?: object;
        }>;
        H6: React.FunctionComponent<{
            style?: object;
        }>;
        Subtitle1: React.FunctionComponent<{
            style?: object;
        }>;
        Subtitle2: React.FunctionComponent<{
            style?: object;
        }>;
        Body1: React.FunctionComponent<{
            style?: object;
        }>;
        Body2: React.FunctionComponent<{
            style?: object;
        }>;
        Caption: React.FunctionComponent<{
            style?: object;
        }>;
        Overline: React.FunctionComponent<{
            style?: object;
        }>;
        WebStepper: React.FunctionComponent<any>;
        CardViewMedia: typeof CardViewMedia;
        'ExpansionPanel': React.FunctionComponent<import("./components/ExpansionPanel/ExpansionPanel.components").ExpansionPanelProps>;
    };
}
export default MaterialUiPlugin;
