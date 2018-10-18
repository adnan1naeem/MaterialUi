<<<<<<< HEAD
/// <reference types="react" />
=======
>>>>>>> f3e27e5c686fe91955f48fae83fc49957d911739
import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties } from './components/Card';
import { MenuItemProperties, MenuProperties, MenuPopperprops } from './components/Menu';
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
<<<<<<< HEAD
        AppBar: React.StatelessComponent<MUIAppBarProperties>;
=======
=======
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<import("@blueeast/bluerain-ui-interfaces/src/components/Card").CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        CardActionArea: React.StatelessComponent<import("src/components/Card/CardActionArea.component").MUICardBodyProperties>;
        CardAction: React.StatelessComponent<import("src/components/Card/CardAction.component").MUICardBodyProperties>;
        Menu: React.StatelessComponent<MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        MenuList: React.StatelessComponent<import("src/components/Menu/MenuList.component").MenuListprops>;
        MenuPopper: React.StatelessComponent<MenuPopperprops>;
>>>>>>> f3e27e5c686fe91955f48fae83fc49957d911739
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        ModalBodyText: React.ComponentType<any>;
>>>>>>> acfc0d568c7f9f14adca2b9cbb6c5f82884060b1
    };
}
export default MaterialUiPlugin;
