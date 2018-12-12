/// <reference types="react" />
import * as React from 'react';
import { MUIAppBarProperties } from './components/AppBar';
import { Badge } from './components/Badge';
import { Plugin } from '@blueeast/bluerain-os';
import { ButtonProperties, CardMediaProperties, ListHeaderProperties, ListItemIconProperties, ListItemRightButtonProperties } from '@blueeast/bluerain-ui-interfaces';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties } from './components/Card';
import { MUIChipProperties } from './components/Chip';
import { ColorPicker } from './components/ColorPicker';
import { MUIDividerProperties } from './components/Divider';
import { MUIDrawerProperties } from './components/Drawer';
import { MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
import { MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
import { MUIListItemAvatarProperties, MUIListItemProperties, MUIListItemTextProperties, MUIListProperties } from './components/List';
import { MenuItemProperties, MenuPopper, MenuProperties } from './components/Menu';
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
        AppBar: React.FunctionComponent<MUIAppBarProperties>;
        Avatar: React.ComponentType<any>;
        Badge: typeof Badge;
        Button: React.FunctionComponent<ButtonProperties>;
        Card: React.FunctionComponent<MUICardProperties>;
        CardHeader: React.FunctionComponent<MUICardHeaderProperties>;
        CardBody: React.FunctionComponent<MUICardBodyProperties>;
        CardMedia: React.FunctionComponent<CardMediaProperties>;
        CardFooter: React.FunctionComponent<MUICardFooterProperties>;
        Chip: React.FunctionComponent<MUIChipProperties>;
        ColorPicker: typeof ColorPicker;
        Divider: React.FunctionComponent<MUIDividerProperties>;
        Drawer: React.FunctionComponent<MUIDrawerProperties & {
            children?: React.ReactNode;
        }>;
        Menu: React.FunctionComponent<MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.FunctionComponent<MenuItemProperties>;
        MenuPopper: typeof MenuPopper;
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        Dropdown: React.FunctionComponent<MUIPickerProperties>;
        DropdownItem: React.FunctionComponent<MUIDropdownItem>;
        List: React.FunctionComponent<MUIListProperties>;
        ListHeader: React.FunctionComponent<ListHeaderProperties>;
        ListItem: React.FunctionComponent<MUIListItemProperties>;
        ListItemAvatar: React.FunctionComponent<MUIListItemAvatarProperties>;
        ListItemIcon: React.FunctionComponent<ListItemIconProperties>;
        ListItemRightButton: React.FunctionComponent<ListItemRightButtonProperties>;
        ListItemText: React.FunctionComponent<MUIListItemTextProperties>;
        Switch: React.FunctionComponent<MUISwitchProperties>;
        Slider: React.ComponentType<any>;
        Stepper: React.FunctionComponent<any>;
        Notification: React.FunctionComponent<any>;
        FormControl: React.FunctionComponent<MUIFormControlProperties>;
        FormGroup: React.FunctionComponent<MUIFormGroupProperties>;
        TextInput: React.FunctionComponent<MUITextInputProperties>;
    };
}
export default MaterialUiPlugin;
