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
<<<<<<< HEAD
        AppBar: React.StatelessComponent<MUIAppBarProperties>;
=======
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        ModalBodyText: React.ComponentType<any>;
>>>>>>> acfc0d568c7f9f14adca2b9cbb6c5f82884060b1
    };
}
export default MaterialUiPlugin;
