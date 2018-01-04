"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var chip_1 = require("../src/components/chip/chip");
test('Chip component with default values', function () {
    var chip = react_test_renderer_1.create(<chip_1.default>10 % off</chip_1.default>).toJSON();
    expect(chip.props.style).toEqual(undefined);
    expect(chip).toMatchSnapshot();
});
test('Chip component with style', function () {
    var chip = react_test_renderer_1.create(<chip_1.default style={{ 'background-color': 'green' }}>10 % off</chip_1.default>).toJSON();
    expect(chip.props.style).toEqual({ 'background-color': 'green' });
    expect(chip).toMatchSnapshot();
});
