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
    color?: 'inherit' | 'primary' | 'default' | 'secondary' | undefined;
}
export declare const BlueRainAppBar: React.StatelessComponent<MUIAppBarProperties>;
