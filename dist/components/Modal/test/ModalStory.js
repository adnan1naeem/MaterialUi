'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Button = require('../../Button');

var _Modal = require('../Modal.Component');

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalBody = require('../ModalBody.Component');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = require('../ModalFooter.Component');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalHeader = require('../ModalHeader.Component');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var ModalStoryComponent = /** @class */function (_super) {
    __extends(ModalStoryComponent, _super);
    function ModalStoryComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOpen = function () {
            _this.setState({ open: true });
        };
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        // this.props=props;
        _this.state = {
            open: false
        };
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleClickOpen = _this.handleClickOpen.bind(_this);
        return _this;
    }
    ModalStoryComponent.prototype.render = function () {
        return _react2.default.createElement("div", null, _react2.default.createElement(_Button.Button, { onPress: this.handleClickOpen }, "Open Dialog"), _react2.default.createElement(_Modal2.default, { open: this.state.open, onClose: this.handleClose, fullWidth: this.props.fullWidth, fullScreen: this.props.fullScreen }, _react2.default.createElement(_ModalHeader2.default, null, "UserLocation Service"), _react2.default.createElement(_ModalBody2.default, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."), _react2.default.createElement(_ModalFooter2.default, null, _react2.default.createElement(_Button.Button, { onPress: this.handleClose, color: "primary" }, "Disagree"), _react2.default.createElement(_Button.Button, { onPress: this.handleClose, color: "primary" }, "Agree"), _react2.default.createElement(_Button.Button, { onPress: this.handleClose, color: "primary" }, "Disagree"), _react2.default.createElement(_Button.Button, { onPress: this.handleClose, color: "primary" }, "Agree"))));
    };
    return ModalStoryComponent;
}(_react2.default.Component);
exports.default = ModalStoryComponent;
//# sourceMappingURL=ModalStory.js.map