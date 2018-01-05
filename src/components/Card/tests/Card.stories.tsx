import * as React from 'react';
import Card, { CardMedia, CardBody, CardFooter, CardHeader } from '../../Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object} from '@storybook/addon-knobs';

BR.boot({renderApp:false});

const Text = BR.Components.get('Text');

const Image = BR.Components.get('Image');

const label = text('label as child', 'with knobs');
storiesOf('Card', module).add('Card with style and raised props', () =>
<Card raised style={{width:'100%', height:300}} className="bg-main"> Raised</Card>);

storiesOf('Card', module).add('Card and raised prop false', () =>
<Card raised={false} style={{width:'100%', height:300}} className="bg-main"> UnRaised success </Card>);

storiesOf('Card', module).add('Card with inverse prop false tag Card', () =>
<Card style={{maxWidth:100}}> Inverse turned text into White, tag is Card and Max width 100 in style prop </Card>);

storiesOf('BluerainCard', module).add('MaterialUI story for music card', () =>(
<Card>
<div>
  <CardBody>
    <h4>Live From Space</h4>
    <h5 style={{color:'green'}}>
      Mac Miller
    </h5>
  </CardBody>
  <div>
    <IconButton aria-label="Previous">
      <SkipNextIcon />
    </IconButton>
    <IconButton aria-label="Play/pause">
      <PlayArrowIcon/>
    </IconButton>
    <IconButton aria-label="Next">
      <SkipPreviousIcon />
    </IconButton>
  </div>
</div>
<CardMedia
  src="/static/images/cards/live-from-space.jpg"
/>
</Card>));

storiesOf('BluerainCard', module).add('MaterialUI basic Card', () =>
(
<Card>
        <CardBody>
          <h1>Word of the Day</h1>
          <h2>
            benevolent
          </h2>
          <h4>adjective</h4>
          <p >
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </p>
        </CardBody>
        <CardFooter>
          <Button dense>Learn More</Button>
        </CardFooter>
      </Card>));

storiesOf('BluerainCard', module).add('MaterialUI Card with all subcomponents', () =>
(
<Card style={{width:350}}>
    <CardHeader
            avatar={<Avatar aria-label="Recipe">R</Avatar>}
            action={<IconButton><PlayArrowIcon /></IconButton>}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
    />
<CardMedia
  src="material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
/>
<CardBody>
  <Typography type="headline" component="h2">
    Lizard
  </Typography>
  <Typography component="p">
    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica
  </Typography>
</CardBody>
<CardFooter>
  <Button dense color="primary">
    Share
  </Button>
  <Button dense color="primary">
    Learn More
  </Button>
</CardFooter>
</Card>));