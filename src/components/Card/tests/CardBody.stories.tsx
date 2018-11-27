import * as React from 'react';
import { CardBody, CardHeader } from '../../Card';
import { storiesOf } from '@storybook/react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

storiesOf('CardBody', module).add('CardBody with style and children props', () =>
  (
    <CardBody
      style={{ width: 200, height: 200, backgroundColor: 'white' }}
    >
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"

      >
      </CardHeader>
    </CardBody>));

storiesOf('CardBody', module).add('CardBody with className and style prop', () =>
  (
    <CardBody
      className="CardMedia Title"
      style={{ width: 500, backgroundColor: 'orange' }}
    >
      <Typography style={{ marginBottom: 16, fontSize: 14 }}>Word of the Day</Typography>
      <Typography component="h2">
        benevolent
		</Typography>
      <Typography style={{ marginBottom: 12 }}>adjective</Typography>
      <Typography component="p">
        well meaning and kindly.<br />
        {'"a benevolent smile"'}
      </Typography>
    </CardBody>));
