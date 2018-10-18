import { Plugin } from '@blueeast/bluerain-os';
import { Badge } from './components/Badge';
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
declare class MaterialUiPlugin extends Plugin {
    static pluginName: string;
    static slug: string;
    static components: {
        Badge: typeof Badge;
    };
}
export default MaterialUiPlugin;
