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
        AppBar: React.StatelessComponent<MUIAppBarProperties>;
        Avatar: React.ComponentType<any>;
        Badge: typeof Badge;
        Button: React.StatelessComponent<MuiButtonProperties>;
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<interfaces.CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        CardActionArea: React.StatelessComponent<{}>;
        CardAction: React.StatelessComponent<ActionProperties>;
        Chip: React.StatelessComponent<interfaces.ChipProperties>;
        Checkbox: (props: MUIProps) => JSX.Element;
        ColorPicker: typeof ColorPicker;
        Divider: React.StatelessComponent<MUIDividerProperties>;
        Drawer: React.StatelessComponent<any>;
        Menu: React.StatelessComponent<interfaces.MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        MenuList: React.StatelessComponent<MenuListprops>;
        MenuPopper: React.StatelessComponent<MenuPopperprops>;
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        ModalBodyText: React.ComponentType<any>;
        'DropDown': React.StatelessComponent<MUIPickerProperties>;
        'DropDownItem': React.StatelessComponent<MUIDropdownItem>;
        List: React.StatelessComponent<MUIListProperties>;
        ListSubheader: React.StatelessComponent<interfaces.ListHeaderProperties>;
        ListItem: React.StatelessComponent<MUIListItemProperties>;
        Switch: React.StatelessComponent<MUISwitchProperties>;
        Slider: React.StatelessComponent<MUISliderProperties>;
        Stepper: React.StatelessComponent<any>;
        FormControl: React.StatelessComponent<MUIFormControlProperties>;
        FormGroup: React.StatelessComponent<MUIFormGroupProperties>;
        TextInput: React.StatelessComponent<MUITextInputProperties>;
        Text: React.StatelessComponent<MUITypographyProperties>;
        H1: React.StatelessComponent<interfaces.TextProperties>;
        H2: React.StatelessComponent<interfaces.TextProperties>;
        H3: React.StatelessComponent<interfaces.TextProperties>;
        H4: React.StatelessComponent<interfaces.TextProperties>;
        H5: React.StatelessComponent<interfaces.TextProperties>;
        H6: React.StatelessComponent<interfaces.TextProperties>;
        Subtitle1: React.StatelessComponent<interfaces.TextProperties>;
        Subtitle2: React.StatelessComponent<interfaces.TextProperties>;
        Body1: React.StatelessComponent<{
            style?: object;
        }>;
        Body2: React.StatelessComponent<interfaces.TextProperties>;
        Caption: React.StatelessComponent<interfaces.TextProperties>;
        Overline: React.StatelessComponent<interfaces.TextProperties>;
        WebStepper: React.StatelessComponent<import("./components/WebStepper/Stepper.components").StepperProps>;
    };
}
export default MaterialUiPlugin;
