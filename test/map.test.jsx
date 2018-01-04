"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var Map_component_1 = require("../src/components/map/Map.component");
test('Map component with default values', function () {
    var map = react_test_renderer_1.create(<Map_component_1.default zoom={12} height={'100px'} width={'500px'}/>).toJSON();
    expect(map.props.width).toEqual(undefined);
    expect(map).toMatchSnapshot();
});
test('Map component with region', function () {
    var map = react_test_renderer_1.create(<Map_component_1.default height={'600px'}/>).toJSON();
    expect(map.props.style).toEqual({ height: '600px' });
    expect(map).toMatchSnapshot();
});
