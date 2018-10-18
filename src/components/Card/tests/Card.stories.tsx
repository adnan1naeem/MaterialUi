import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '../../Card';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from '@material-ui/core/Avatar';
import BR from '@blueeast/bluerain-os';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from 'material-ui-icons/SkipNext';
// import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import Typography from '@material-ui/core/Typography';

storiesOf('Card', module).addDecorator(withKnobs).add('Card with style, className and raised props', () =>
  <Card raised style={{ backgroundColor: 'brown' }} className="bg-main">{text('label', 'Raised')}</Card>);

storiesOf('Card', module).add('Card and raised prop false', () =>
  <Card raised={false} style={{ backgroundColor: 'orange' }} className="bg-main">UnRaised success </Card>);

storiesOf('Card', module).add('Card with children and tag props', () =>
  <Card style={{ maxWidth: 100 }} tag={CardHeader}> hello</Card>);

storiesOf('Card', module).add('Card with square, tag as Text and elevation as 12 props', () =>
  <Card style={{ maxWidth: 100 }} tag={<BR.Components.Text>Tag</BR.Components.Text>} square elevation={12}>Hello</Card>);


storiesOf('BluerainCard', module).add('MaterialUI story for music card', () => (
  <Card style={{ width: 350, display: 'flex' }}>
    <div>
      <CardBody>
        <h4>Live From Space</h4>
        <h5 style={{ color: 'green' }}>
          Mac Miller
    </h5>
      </CardBody>
      <div>
        {/* <IconButton aria-label="Previous">
          <SkipNextIcon />
        </IconButton>
        <IconButton aria-label="Play/pause">
          <PlayArrowIcon />
        </IconButton>
        <IconButton aria-label="Next">
          <SkipPreviousIcon />
        </IconButton> */}
      </div>
    </div>
    <CardMedia
      src="https://material-ui-next.com/static/images/cards/live-from-space.jpg"
      style={{ width: 200 }}
      height={200}
    />
  </Card>));

storiesOf('BluerainCard', module).add('MaterialUI basic Card', () =>
  (
    <Card style={{ maxWidth: 275 }}>
      <CardBody>
        <Typography style={{ marginBottom: 16, fontSize: 14 }}>Word of the Day</Typography>
        <Typography component="h2">
          benevolent
  </Typography>
        <Typography style={{ marginBottom: 12 }}>adjective</Typography>
        <Typography component="p">
          well meaning and kindly.<br />
          {'"a benevolent smile"'}
        </Typography>
      </CardBody>
      <CardFooter>
        <Button >Learn More</Button>
      </CardFooter>
    </Card>));

storiesOf('BluerainCard', module).add('MaterialUI Card with all subcomponents', () =>
  (
    <Card style={{ width: 350 }}>
      <CardHeader
        avatar={<Avatar aria-label="Recipe">R</Avatar>}
        //  action={<IconButton><PlayArrowIcon /></IconButton>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        src="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
        height={200}
      />
      <CardBody>
        <Typography component="h2">
          Lizard
  </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
  </Typography>
      </CardBody>
      <CardFooter>
        <Button color="primary">
          Share
  </Button>
        <Button color="primary">
          Learn More
  </Button>
      </CardFooter>
    </Card>));