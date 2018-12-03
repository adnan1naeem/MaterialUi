import { TextProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
export interface MUITypographyProperties extends TextProperties {
    headlineMapping?: any;
}
declare const Text: React.StatelessComponent<MUITypographyProperties>;
export default Text;
