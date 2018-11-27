import * as React from 'react';
import { ExpansionPanelComponent } from '../ExpansionPanel.components';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const stories = storiesOf('ExpansionPanelComponent', module);

stories.add('with all props', () => {

	return (
		<>
			<ExpansionPanelComponent title={'brand'} expandIcon={<ExpandMoreIcon />} >
				<Typography>
					Here will be the render list component
          </Typography>
			</ExpansionPanelComponent>

			<ExpansionPanelComponent title={'brand'} expandIcon={<ExpandMoreIcon />} >
				<Typography>
					Here will be the render list component
	  </Typography>
			</ExpansionPanelComponent>
		</>
	);
});

