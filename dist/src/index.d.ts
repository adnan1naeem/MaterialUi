/// <reference types="react" />
import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        Drawer: React.StatelessComponent<any>;
    };
}
export default MaterialUiPlugin;
