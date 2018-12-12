/// <reference types="react" />
import interfaces from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
import { ActionProperties, MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties } from './components/Card';
import { MUIAppBarProperties } from './components/AppBar';
import { Badge } from './components/Badge';
import { MuiButtonProperties } from './components/Button';
import { MUIProps } from './components/Checkbox';
import { ChipMUIProperties } from './components/Chip';
import { ColorPicker } from './components/ColorPicker';
import { MUIDividerProperties } from './components/Divider';
import { MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
import { MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
import { MUIListItemProperties, MUIListProperties } from './components/List';
import { MenuItemProperties, MenuListprops, MenuPopperprops } from './components/Menu';
import { MUISliderProperties } from './components/Slider';
import { MUISwitchProperties } from './components/Switch';
import { MUITextInputProperties } from './components/TextInput';
import { MUITypographyProperties } from './components/Text';
import { Plugin } from '@blueeast/bluerain-os';
import { StepperProps } from './components/Stepper';
import { WebStepperProps } from './components/WebStepper';
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
        Chip: React.FunctionComponent<ChipMUIProperties>;
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
        Stepper: React.FunctionComponent<StepperProps>;
        FormControl: React.FunctionComponent<MUIFormControlProperties>;
        FormGroup: React.FunctionComponent<MUIFormGroupProperties>;
        TextInput: React.FunctionComponent<MUITextInputProperties>;
        Text: React.FunctionComponent<MUITypographyProperties>;
        H1: React.FunctionComponent<interfaces.TextProperties>;
        H2: React.FunctionComponent<interfaces.TextProperties>;
        H3: React.FunctionComponent<interfaces.TextProperties>;
        H4: React.FunctionComponent<interfaces.TextProperties>;
        H5: React.FunctionComponent<interfaces.TextProperties>;
        H6: React.FunctionComponent<interfaces.TextProperties>;
        Subtitle1: React.FunctionComponent<interfaces.TextProperties>;
        Subtitle2: React.FunctionComponent<interfaces.TextProperties>;
        Body1: React.FunctionComponent<{
            style?: object | undefined;
        }>;
        Body2: React.FunctionComponent<interfaces.TextProperties>;
        Caption: React.FunctionComponent<interfaces.TextProperties>;
        Overline: React.FunctionComponent<interfaces.TextProperties>;
        WebStepper: React.FunctionComponent<WebStepperProps>;
    };
}
export default MaterialUiPlugin;
