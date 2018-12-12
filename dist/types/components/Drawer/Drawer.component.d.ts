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
    PaperProps?: any;
    SlideProps?: any;
    ModalProps?: any;
    variant?: 'permanent' | 'persistent' | 'temporary';
    classes?: any;
}
export declare const MUIDrawer: React.StatelessComponent<MUIDrawerProperties & {
    children?: React.ReactNode;
}>;
