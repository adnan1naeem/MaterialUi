import * as React from 'react';
import { MUIAppBarProperties } from './components/AppBar';
import { Plugin } from '@blueeast/bluerain-os';
import { ButtonProperties, CardMediaProperties, ListHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties } from './components/Card';
import { MUIChipProperties } from './components/Chip';
import { ColorPicker } from './components/ColorPicker';
import { MUIDividerProperties } from './components/Divider';
import { MUIDrawerProperties } from './components/Drawer';
import { MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
import { MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
import { MUIListItemProperties, MUIListProperties } from './components/List';
import { MUISwitchProperties } from './components/Switch';
import { MUITextInputProperties } from './components/TextInput';
import { MenuItemProperties, MenuProperties } from './components/Menu';
import { Badge } from './components/Badge';
import { ScrollViewProperties } from './components/ScrollView';
import Checkbox from './components/Checkbox';
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
        Checkbox: typeof Checkbox;
        ColorPicker: typeof ColorPicker;
        Divider: React.StatelessComponent<MUIDividerProperties>;
        Drawer: React.StatelessComponent<MUIDrawerProperties & {
            children?: React.ReactNode;
        }>;
        Menu: React.StatelessComponent<MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        'DropDown': React.StatelessComponent<MUIPickerProperties>;
        'DropDownItem': React.StatelessComponent<MUIDropdownItem>;
        List: React.StatelessComponent<MUIListProperties>;
        ListSubheader: React.StatelessComponent<ListHeaderProperties>;
        ListItem: React.StatelessComponent<MUIListItemProperties>;
        Switch: React.StatelessComponent<MUISwitchProperties>;
        ScrollView: (props: ScrollViewProperties) => JSX.Element;
        Stepper: React.StatelessComponent<any>;
        Notification: React.StatelessComponent<any>;
        FormControl: React.StatelessComponent<MUIFormControlProperties>;
        FormGroup: React.StatelessComponent<MUIFormGroupProperties>;
        TextInput: React.StatelessComponent<MUITextInputProperties>;
        H1: React.StatelessComponent<{
            style?: object;
        }>;
        H2: React.StatelessComponent<{
            style?: object;
        }>;
        H3: React.StatelessComponent<{
            style?: object;
        }>;
        H4: React.StatelessComponent<{
            style?: object;
        }>;
        H5: React.StatelessComponent<{
            style?: object;
        }>;
        H6: React.StatelessComponent<{
            style?: object;
        }>;
        Subtitle1: React.StatelessComponent<{
            style?: object;
        }>;
        Subtitle2: React.StatelessComponent<{
            style?: object;
        }>;
        Body1: React.StatelessComponent<{
            style?: object;
        }>;
        Body2: React.StatelessComponent<{
            style?: object;
        }>;
        Caption: React.StatelessComponent<{
            style?: object;
        }>;
        Overline: React.StatelessComponent<{
            style?: object;
        }>;
    };
}
export default MaterialUiPlugin;
