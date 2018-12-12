/// <reference types="react" />
import React from 'react';
export interface States {
    open: boolean;
}
export interface Props {
    onClose?: () => void;
    fullWidth?: boolean;
    fullScreen?: boolean;
}
declare class ModalStoryComponent extends React.Component<Props, States> {
    constructor(props: any);
    handleClickOpen: () => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export default ModalStoryComponent;
