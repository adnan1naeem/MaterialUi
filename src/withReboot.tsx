import { ComponentRegistryHocItem } from '@blueeast/bluerain-os';
import React from 'react';
import Reboot from 'material-ui/Reboot';

const withReboot : ComponentRegistryHocItem = (Component) => (props) => (
	<Reboot>{props.children}</Reboot>
);

export { withReboot };
