import { NotificationProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
export interface NotificationProps extends NotificationProperties {
    open: boolean;
    onClose: () => void;
    transition: any;
    SnackbarContentProps: any;
    message?: any;
    children?: any;
    position: any;
    action?: any;
    anchorOrigin?: object;
    autoHideDuration?: number;
    resumeHideDuration?: number;
}
export declare const Notification: React.StatelessComponent<any>;
