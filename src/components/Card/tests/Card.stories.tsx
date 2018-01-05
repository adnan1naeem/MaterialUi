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


const label = text('label as child', <Text>WithKnobs</Text>);

storiesOf('Card', module).add('Card with style, className and raised props', () =>
<Card raised style={{backgroundColor:'brown'}} className="bg-main">Raised</Card>);

storiesOf('Card', module).add('Card and raised prop false', () =>
<Card raised={false} style={{backgroundColor:'orange'}} className="bg-main">UnRaised success </Card>);

storiesOf('Card', module).add('Card with children and tag props', () =>
<Card style={{maxWidth:100}} tag={CardHeader}> {label} </Card>);

storiesOf('Card', module).add('Card with square and elevation props', () =>
<Card style={{maxWidth:100}} tag={CardHeader} square elevation={12}> {label} </Card>);


storiesOf('BluerainCard', module).add('MaterialUI story for music card', () =>(
<Card style={{width:350, display:'flex'}}>
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
  src="https://material-ui-next.com/static/images/cards/live-from-space.jpg"
  style={{height:200, width:200}}
/>
</Card>));

storiesOf('BluerainCard', module).add('MaterialUI basic Card', () =>
(
<Card style={{maxWidth:275}}>
<CardBody>
  <Typography style={{marginBottom: 16,fontSize: 14}}>Word of the Day</Typography>
  <Typography type="headline" component="h2">
    benevolent
  </Typography>
  <Typography style={{marginBottom: 12}}>adjective</Typography>
  <Typography component="p">
    well meaning and kindly.<br />
    {'"a benevolent smile"'}
  </Typography>
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
  src="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
  style={{height:200}}
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