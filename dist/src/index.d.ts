/// <reference types="react" />
import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import { MUISwitchProperties } from './components/Switch';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        Switch: React.StatelessComponent<MUISwitchProperties>;
    };
}
export default MaterialUiPlugin;
