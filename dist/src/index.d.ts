import * as React from 'react';
import { Plugin } from '@blueeast/bluerain-os';
import { MUICardBodyProperties, MUICardFooterProperties, MUICardHeaderProperties, MUICardProperties, ActionProperties } from './components/Card';
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
        Card: React.StatelessComponent<MUICardProperties>;
        CardHeader: React.StatelessComponent<MUICardHeaderProperties>;
        CardBody: React.StatelessComponent<MUICardBodyProperties>;
        CardMedia: React.StatelessComponent<import("@blueeast/bluerain-ui-interfaces/src/components/Card").CardMediaProperties>;
        CardFooter: React.StatelessComponent<MUICardFooterProperties>;
        CardActionArea: React.StatelessComponent<{}>;
        CardAction: React.StatelessComponent<ActionProperties>;
        Menu: React.StatelessComponent<MenuProperties & {
            open: boolean;
        }>;
        MenuItem: React.StatelessComponent<MenuItemProperties>;
        MenuList: React.StatelessComponent<import("src/components/Menu/MenuList.component").MenuListprops>;
        MenuPopper: React.StatelessComponent<MenuPopperprops>;
        Modal: React.ComponentType<any>;
        ModalHeader: React.ComponentType<any>;
        ModalBody: React.ComponentType<any>;
        ModalFooter: React.ComponentType<any>;
        ModalBodyText: React.ComponentType<any>;
    };
}
export default MaterialUiPlugin;
