import DialogActions from '@material-ui/core/DialogActions';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';

export interface ModalFooterProps extends ModalFooterProperties {
  disableActionSpacing?: boolean
}
const ModalFooter: React.StatelessComponent<ModalFooterProps> = (props) => {

  return (
    <DialogActions {...props}>
      {props.children}
    </DialogActions>
  );
};
export default ModalFooter as React.ComponentType<any>;
