"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import React,{ Children } from 'react';
const react_1 = __importDefault(require("react"));
const Menu_1 = require("material-ui/Menu");
const DropdownItem = (props) => (react_1.default.createElement(Menu_1.MenuItem, Object.assign({ value: props.value }, props)));
exports.default = DropdownItem;
//# sourceMappingURL=DropdownItem.component.js.map