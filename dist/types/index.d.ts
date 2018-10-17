import * as React from 'react';
import { MUIAppBarProperties } from './components/AppBar';
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
import { MUISwitchProperties } from './components/Switch';
import { MUITextInputProperties } from './components/TextInput';
import { MenuItemProperties, MenuPopper, MenuProperties } from './components/Menu';
import { Badge } from './components/Badge';
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
        Badge: typeof Badge;
        Button: React.StatelessComponent<ButtonProperties>;
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        Chip: React.StatelessComponent<MUIChipProperties>;
        ColorPicker: typeof ColorPicker;
        Divider: React.StatelessComponent<MUIDividerProperties>;
        Drawer: React.StatelessComponent<MUIDrawerProperties & {
            children?: React.ReactNode;
        }>;
        Menu: React.StatelessComponent<MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        MenuPopper: typeof MenuPopper;
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        Dropdown: React.StatelessComponent<MUIPickerProperties>;
        DropdownItem: React.StatelessComponent<MUIDropdownItem>;
        List: React.StatelessComponent<MUIListProperties>;
        ListHeader: React.StatelessComponent<ListHeaderProperties>;
        ListItem: React.StatelessComponent<MUIListItemProperties>;
        ListItemAvatar: React.StatelessComponent<MUIListItemAvatarProperties>;
        ListItemIcon: React.StatelessComponent<ListItemIconProperties>;
        ListItemRightButton: React.StatelessComponent<ListItemRightButtonProperties>;
        ListItemText: React.StatelessComponent<MUIListItemTextProperties>;
        Switch: React.StatelessComponent<MUISwitchProperties>;
        Slider: React.ComponentType<any>;
        Stepper: React.StatelessComponent<any>;
        ScrollView: (props: import("src/components/ScrollView").ScrollViewProperties) => JSX.Element;
        Notification: React.StatelessComponent<any>;
        FormControl: React.StatelessComponent<MUIFormControlProperties>;
        FormGroup: React.StatelessComponent<MUIFormGroupProperties>;
        TextInput: React.StatelessComponent<MUITextInputProperties>;
    };
}
export default MaterialUiPlugin;
