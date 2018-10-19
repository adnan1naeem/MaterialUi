import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import { MuiButtonProperties } from './components/Button';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        Button: React.StatelessComponent<MuiButtonProperties>;
    };
}
export default MaterialUiPlugin;
