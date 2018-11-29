
import React from 'react';
import { AppBar, MUIAppBarProperties } from './components/AppBar';
import { Plugin } from '@blueeast/bluerain-os';
import interfaces from '@blueeast/bluerain-ui-interfaces';

import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardMedia,
	CardActionArea,
	CardAction,
	MUICardBodyProperties,
	MUICardFooterProperties,
	MUICardHeaderProperties,
	MUICardProperties,
	ActionProperties
} from './components/Card';
import { Chip, ChipProperties } from './components/Chip';
import { ColorPicker, ColorPickerProperties } from './components/ColorPicker';
import { Badge } from './components/Badge';

import { Divider, MUIDividerProperties } from './components/Divider';
import { Drawer, MUIDrawerProperties } from './components/Drawer';
import { Dropdown, DropdownItem, MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
import { FormControl, FormGroup, MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
import {
	List,
	ListSubheader,
	ListItem,
	MUIListItemProperties,
	MUIListProperties
} from './components/List';
import { MUISwitchProperties, Switch } from './components/Switch';
import { MUITextInputProperties, TextInput } from './components/TextInput';
import { Menu, MenuItem, MenuItemProperties, MenuProperties, MenuPopper, MenuListprops, MenuPopperprops, MenuList } from './components/Menu';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalBodyText } from './components/Modal';
import { Avatar } from './components/Avatar';
import { Button, MuiButtonProperties } from './components/Button';
// import { Notification } from './components/Notification';
import { Stepper } from './components/Stepper';
import { WebStepper } from './components/WebStepper';
import { CardViewMedia } from './components/CardViewMedia';
import { ExpansionPanelComponent } from './components/ExpansionPanel'
import H1 from './components/H1/H1.component';
import H2 from './components/H2/H2.component';
import H3 from './components/H3/H3.component';
import H4 from './components/H4/H4.component';
import H5 from './components/H5/H5.component';
import H6 from './components/H6/H6.component';
import Subtitle1 from './components/Subtitle1/Subtitle1.component';
import Subtitle2 from './components/Subtitle2/Subtitle2.component';
import Body1 from './components/Body1/Body1.component';
import Body2 from './components/Body2/Body2.component';
import Overline from './components/Overline/Overline.component';
import Caption from './components/Caption/Caption.component';
import { Checkbox, MUIProps } from './components/Checkbox';

import { Slider, MUISliderProperties } from './components/Slider';

/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */

class MaterialUiPlugin extends Plugin {
	static pluginName = 'MaterialUiPlugin';
	static slug = 'material-ui';
	static components = {

		AppBar,
		Avatar,
		Badge,
		Button,
		Card,
		CardHeader,
		CardBody,
		CardMedia,
		CardFooter,
		CardActionArea,
		CardAction,
		Chip,
		Checkbox,
		ColorPicker,
		Divider,
		Drawer,
		Menu,
		MenuItem,
		MenuList,
		MenuPopper,
		Modal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		ModalBodyText,
		'DropDown': Dropdown,
		'DropDownItem': DropdownItem,
		List,
		ListSubheader,
		ListItem,
		Switch,
		Slider,
		Stepper,
		// Notification,
		FormControl,
		FormGroup,
		TextInput,
		H1,
		H2,
		H3,
		H4,
		H5,
		H6,
		Subtitle1,
		Subtitle2,
		Body1,
		Body2,
		Caption,
		Overline,
		WebStepper,
		CardViewMedia,
		'ExpansionPanel': ExpansionPanelComponent
	};

	// static hooks = {
	//  'bluerain.system.initialized': (BR: BlueRain) => {
	//    BR.Components.addHocs('SystemLayout', withReboot);
	//  },
	// };
}

export default MaterialUiPlugin;
