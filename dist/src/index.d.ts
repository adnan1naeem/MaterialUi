import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import { MUIDividerProperties } from './components/Divider';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        Divider: React.StatelessComponent<MUIDividerProperties>;
    };
}
export default MaterialUiPlugin;
