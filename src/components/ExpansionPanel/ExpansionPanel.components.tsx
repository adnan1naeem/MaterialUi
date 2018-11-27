import { StepperProperties } from '@blueeast/bluerain-ui-interfaces';
import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

export interface ExpansionPanelProps {
  children: React.ReactNode;
  title?: string;
  expandIcon?: React.ReactNode;
}
export const ExpansionPanelComponent: React.StatelessComponent<any> = (props: ExpansionPanelProps) => {

  return (
    <ExpansionPanel   {...props} >
      <ExpansionPanelSummary expandIcon={props.expandIcon}>
        {props.title}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};






