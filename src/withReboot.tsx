import React from 'react';
import Reboot from 'material-ui/Reboot';
import { ComponentRegistryHocItem } from '@blueeast/bluerain-os';

const withReboot : ComponentRegistryHocItem = (Component) => (props) => (
	<Reboot><Component {...props} /></Reboot>
);

export default withReboot;
