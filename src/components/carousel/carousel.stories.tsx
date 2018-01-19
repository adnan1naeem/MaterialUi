import * as React from 'react';
import CarouselComponent from './carousel';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';
import BR from '@blueeast/bluerain-os';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Card, { CardMedia, CardBody, CardFooter, CardHeader } from '../Card';

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);


BR.boot({renderApp:false});
stories.add('Carousel of Images', () => {
  const Image = BR.Components.get('Image');
  const View = BR.Components.get('View');
  const dots = boolean('Show Dots', true);
  const infinite = boolean('Infinite Scroll', true);
  const speed = number('Scroll Speed', 500);
  const slidesToShow = number('Slides Shown', 1);
  const slidesToScroll = number('Slides Scrolled', 1);
  const imgStyle = {
    width: '100%',
    height: 500
  };
  const data = (
    <View>
      <Image
        source={'https://s3.amazonaws.com/dukaan-ui/banner-01.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt="bannerImage"
      />
      <Image
        source={'https://getbootstrap.com/assets/img/bootstrap-stack.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt="bannerImage"
      />
      <Image
        source={'https://s3.amazonaws.com/dukaan-ui/banner-01.png'}
        resizeMode={'auto'}
        style={imgStyle}
        alt="bannerImage"
      />
    </View>
  );
  return (
    <CarouselComponent
      banners={data}
      dots={dots}
      infinite={infinite}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    />
  );
});

stories.add('Carousel of Cards', () => {
  const View = BR.Components.get('View');
  const dots = boolean('Show Dots', true);
  const infinite = boolean('Infinite Scroll', true);
  const speed = number('Scroll Speed', 500);
  const slidesToShow = number('Slides Shown', 1);
  const slidesToScroll = number('Slides Scrolled', 1);
  const data = (
    <View>
      <Card style={{width:1000, height:500}}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe">R</Avatar>}
          action={<IconButton><PlayArrowIcon /></IconButton>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          src="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
          height={200}
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
      </Card>
      <Card style={{width:1000, height:500}}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe">R</Avatar>}
          action={<IconButton><PlayArrowIcon /></IconButton>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          src="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
          height={200}
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
      </Card>
    </View>
  );
  return (
    <CarouselComponent
      banners={data}
      dots={dots}
      infinite={infinite}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    />
  );
});


