import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export interface ExpansionPanelProps {
  children: React.ReactNode;
  title?: string;
  expandIcon?: React.ReactNode;
}
const ExpansionPanelComponent: React.StatelessComponent<ExpansionPanelProps> = (props) => {

  return (
    <ExpansionPanel   {...props} >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
        {props.title}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpansionPanelComponent;







