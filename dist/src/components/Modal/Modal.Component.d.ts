import React, { ReactNode } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
export interface MUIModalProperties extends ModalProperties {
    fullScreen?: boolean;
    fullWidth?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md';
    onClose: () => void;
    visible: boolean;
    children: ReactNode;
}
declare const _default: React.ComponentType<any>;
export default _default;
