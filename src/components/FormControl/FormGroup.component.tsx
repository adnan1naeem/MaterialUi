/**
 * Created by M.GhazanfarAli on 13/02/18.
 */

import * as React from 'react';
import { FormGroup } from 'material-ui/Form';
import { FormGroupProp } from '@blueeast/bluerain-ui-interfaces';

/**
 * The props of ListHeader Component
 * @param {Node} props.children Children of FormGroup.
 * @param {Object} props.row If true, children are shown in a compact row.
 * @param {Object} props.style style object for FormGroup's style.
 * @param {Object} props.className className for FormGroup's extended style.
 */
export interface MUIProps {
	classes?: {},
}

const BlueRainFormGroup: React.StatelessComponent = (props: FormGroupProp & MUIProps) => {
	return (
        <FormGroup {...props} />
	);

};

export default BlueRainFormGroup;