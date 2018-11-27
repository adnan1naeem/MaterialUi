"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file contain all the apps, plugins and configuration which are required
// for booting bluerain-os. see https://blueeast.gitbooks.io/bluerain-os/
exports.default = {
    apps: [],
    platform: [
        require('@blueeast/bluerain-platform-react-native')
    ],
    plugins: [
        require('@blueeast/bluerain-plugin-react-router'),
        require('@blueeast/bluerain-plugin-redux'),
    ],
};
//# sourceMappingURL=bluerain.js.map