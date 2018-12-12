/// <reference types="react" />
import React from 'react';
export interface States {
    open: boolean;
}
export interface Props {
    fullScreen?: boolean;
    fullWidth?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md';
    onClose?: () => void;
    visible?: boolean;
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
    TransitionComponent?: string;
    transitionDuration?: {
        enter?: number;
        exit?: number;
    };
    TransitionProps?: object;
}
declare class ModalStoryComponent extends React.Component<Props, States> {
    constructor(props: any);
    handleClickOpen: () => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export default ModalStoryComponent;
