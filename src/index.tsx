import * as React from 'react';
import { AppBar, MUIAppBarProperties } from './components/AppBar';
import { BlueRainType , Plugin } from '@blueeast/bluerain-os';
import { ButtonProperties, CardMediaProperties, ListHeaderProperties, ListItemIconProperties, ListItemRightButtonProperties } from '@blueeast/bluerain-ui-interfaces';
import { Card, CardBody, CardFooter, CardHeader, CardMedia, MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties } from './components/Card';
import { Chip, MUIChipProperties } from './components/Chip';
import { Divider, MUIDividerProperties } from './components/Divider';
import { Dropdown, DropdownItem, MUIDropdownItem, MUIPickerProperties } from './components/DropDown';
import { FormControl, FormGroup, MUIFormControlProperties, MUIFormGroupProperties } from './components/FormControl';
import { List, ListHeader , ListItem, ListItemAvatar, ListItemIcon, ListItemRightButton, ListItemText, MUIListItemAvatarProperties, MUIListItemProperties, MUIListItemTextProperties, MUIListProperties } from './components/List';
import { MUISwitchProperties, Switch } from './components/Switch';
import { MUITextInputProperties, TextInput } from './components/TextInput';
import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { Breadcrumb } from './components/Breadcrumb';
import { Button } from './components/Button';

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
		Chip,
		Divider,
		Dropdown,
		DropdownItem,
		List,
		ListHeader,
		ListItem,
		ListItemAvatar,
		ListItemIcon,
		ListItemRightButton,
		ListItemText,
		Switch,
		FormControl,
		FormGroup,
		TextInput,
		Breadcrumb, // Deprecated, remove in next semver major version
	};
}

export default MaterialUiPlugin;
