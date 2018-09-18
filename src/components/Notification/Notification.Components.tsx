import { NotificationProperties }  from  '@blueeast/bluerain-ui-interfaces';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export interface NotificationProps  extends NotificationProperties  {
  open: boolean;
  onClose: () => void;
  transition:any;
  SnackbarContentProps:any;
  message?: any;
  children?: any,
  position: any,
  action?: any;
  anchorOrigin?:object;
  autoHideDuration?: number;
  resumeHideDuration?: number;
}

export const Notification : React.StatelessComponent<any> = (props:NotificationProps) => {

  return (
  <Snackbar  message={props.text}  autoHideDuration={props.duration}   {...props} />
  );
};






