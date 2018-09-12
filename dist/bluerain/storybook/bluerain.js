"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_1 = __importDefault(require("../common/bluerain"));
const deepmerge_1 = __importDefault(require("deepmerge"));
// TODO: Only for evaluation, remove this
const sample_1 = __importDefault(require("./sample"));
/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions = {
    plugins: [
        // TODO: Only for evaluation, remove this
        sample_1.default
    ],
    config: {
        wallpaper: {
            backgroundColor: 'white',
            resizeMode: 'cover',
            source: require('./../../assets/storybook/wallpaper.jpg'),
        },
    }
};
exports.default = deepmerge_1.default(bluerain_1.default, bootOptions);
//# sourceMappingURL=bluerain.js.map