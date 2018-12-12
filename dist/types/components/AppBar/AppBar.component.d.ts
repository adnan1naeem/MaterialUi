/// <reference types="react" />
import * as React from 'react';
import { AppBarProperties } from '@blueeast/bluerain-ui-interfaces';
/**
 * An interface that extends the AppBarProperties interface
 *
 * @export MUIAppBarProperties
 * @interface MUIAppBarProperties
 * @extends {AppBarProperties}
 */
export interface MUIAppBarProperties extends AppBarProperties {
    color?: 'inherit' | 'primary' | 'accent' | 'default' | undefined;
    position?: 'static' | 'fixed' | 'absolute' | undefined;
}
export declare const BlueRainAppBar: React.StatelessComponent<MUIAppBarProperties>;
