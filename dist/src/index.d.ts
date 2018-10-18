import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import { MUITextInputProperties } from './components/TextInput';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        TextInput: React.StatelessComponent<MUITextInputProperties>;
    };
}
export default MaterialUiPlugin;
