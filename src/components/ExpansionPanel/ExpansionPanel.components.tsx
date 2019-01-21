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
  collapsed?: boolean;
  onChange?: () => void;
  styles?: object;
  defaultExpanded?: boolean;
  detailStyle?: object;
  summeryStyle?: object;
}
const ExpansionPanelComponent: React.StatelessComponent<ExpansionPanelProps> = (props) => {

  return (
    <ExpansionPanel  {...props} >
      <ExpansionPanelSummary style={props.summeryStyle} expanded={props.collapsed} expandIcon={props.expandIcon} >
        {props.title}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={props.detailStyle}>
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpansionPanelComponent;







