import * as React from 'react';
import { ExpansionPanelComponent } from '../';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const stories = storiesOf('ExpansionPanelComponent', module);

stories.add('with all props', () => {

	return (
		<>
			<ExpansionPanelComponent collapsed={false} title={'brand'} expandIcon={<ExpandMoreIcon />} >
				<Typography>
					Here will be the render list component
          </Typography>
			</ExpansionPanelComponent>

			<ExpansionPanelComponent title={'brand'} defaultExpanded={true} collapsed={true} expandIcon={<ExpandMoreIcon />} >
				<Typography>
					Here will be the render list component
	  </Typography>
			</ExpansionPanelComponent>
		</>
	);
});

