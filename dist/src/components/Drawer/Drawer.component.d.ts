/// <reference types="react" />
import * as React from 'react';
import { DrawerProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * An interface that extends the DrawerProperties interface
 *
 * @export MUIDrawerProperties
 * @interface MUIDrawerProperties
 * @extends {DrawerProperties}
 */
export interface MUIDrawerProperties extends DrawerProperties {
    PaperProps?: object;
    SlideProps?: object;
    ModalProps?: object;
    variant?: 'permanent' | 'persistent' | 'temporary';
    classes?: any;
    elevation?: number;
}
declare const _default: React.FunctionComponent<any>;
export default _default;
