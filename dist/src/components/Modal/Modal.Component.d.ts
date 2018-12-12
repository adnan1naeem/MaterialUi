/// <reference types="react" />
import React, { ReactNode } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MUIModalProperties extends ModalProperties {
    fullScreen?: boolean;
    fullWidth?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md';
    onClose: () => void;
    visible: boolean;
    disableBackdropClick?: boolean;
    disableEscapeKeyDown?: boolean;
    onBackdropClick?: () => void;
    onEnter?: () => void;
    onEntered?: () => void;
    onEntering?: () => void;
    onEscapeKeyDown?: () => void;
    onExit?: () => void;
    onExited?: () => void;
    onExiting?: () => void;
    open?: boolean;
    PaperProps?: object;
    scroll?: 'body' | 'paper';
    transitionDuration?: {
        enter?: number;
        exit?: number;
    };
    TransitionProps?: object;
    children: ReactNode;
}
declare const _default: React.ComponentType<any>;
export default _default;
