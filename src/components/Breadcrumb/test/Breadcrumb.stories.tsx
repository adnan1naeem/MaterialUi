import { object, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import BR from '@blueeast/bluerain-os';
import Breadcrumb from '../../Breadcrumb';
import Paper from 'material-ui/Paper';
import React from 'react';

const stories = storiesOf('Breadcrumb', module);

stories.add('Breadcrumb (knobs)', () => {
	const label = text('label', 'Site');
	const colorPrev = text('previous color', 'red');
	const colorActive = text('active color', 'yellow');
	const data = object('object of data ', [{ title:'CardView', path: 'https://www.facebook.com' }]);
	return (
  <Paper style={{ padding: 20, display:'inline-block' }}>
    <Breadcrumb
      data={data}
      label={label}
      colorPrev={colorPrev}
      colorActive={colorActive}
    />
  </Paper>
	);
});

stories.add('Breadcrumb (with default colors)', () => {
	const label = 'Site';
	const data = [{ title:'CardView', path: 'https://www.facebook.com' }];

	return (
  <Paper style={{ padding: 20, display:'inline-block' }}><Breadcrumb
    data={data}
    label={label}
  /></Paper>
	);
});

stories.add('Breadcrumb default', () => (<Paper style={{ padding: 20, display:'inline-block' }}><Breadcrumb /></Paper>));


stories.add('Breadcrumb with multiple breadcrumb entries', () => (
<Paper style={{ padding: 20, display:'inline-block' }}>
  <Breadcrumb data={[{ title:'CardView1', path: 'https://www.facebook.com' }, { title:'CardView2', path: 'https://www.linkedin.com' }, { title:'CardView3', path: 'https://www.instagram.com' }]} label="Current" />
</Paper>));


// stories.add('Breadcrumb Bad data', () => (
//   <Breadcrumb
//     data={'{ title:\'CardView1\', path: \'www.facebook.com\' }, { title:\'CardView2\', path: \'www.linkedin.com\' }, { title:\'CardView3\', path: \'www.instagram.com\' }'}
//     colorActive={'8'}
//     colorPrev={'123'}
//     label={'12'}
//   />
// ));
