import * as React from 'react';
import { CardViewMedia } from '../'
import { /* text, */ withKnobs } from '@storybook/addon-knobs';
import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import BR from '@blueeast/bluerain-os';
import { storiesOf } from '@storybook/react';


const font = {
  color: 'white',

}


storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with image and overlaytitle position top left',
    () => (
      <BlueRainConsumer>
        {(BR: BlueRain) =>
          <CardViewMedia

            overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
            overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
            overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
            overlayColor={'rgba(30,24,40,0.35)'}
            mediaComponent='img'
            overlayDirection='topLeft'
            mediaWidth={250}
            mediaHeight={250}
            src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
          />

        }
      </BlueRainConsumer >));
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with image and overlaytitle position top right',
    () => (

      <CardViewMedia
        overlayDirection='topRight'
        mediaComponent='img'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
        mediaWidth={250}
        mediaHeight={250}
        src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
      />

    )
  );
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with image and overlaytitle position bottom left',
    () => (

      <CardViewMedia

        mediaComponent='img'
        overlayDirection='bottomLeft'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity </BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}

        mediaWidth={250}
        mediaHeight={250}
        src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
      />

    )
  );
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with image and overlaytitle position bottom right',
    () => (

      <CardViewMedia
        mediaComponent='img'
        overlayDirection='bottomRight'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
        mediaWidth={250}
        mediaHeight={250}
        src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
      />

    )
  );

storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with video and overlaytitle position top left',
    () => (

      <CardViewMedia

        mediaComponent='iframe'
        overlayDirection='topLeft'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
        mediaWidth={250}
        mediaHeight={145}
        src='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      />

    )
  );
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with video and overlaytitle position top right',
    () => (

      <CardViewMedia

        mediaComponent='iframe'
        overlayDirection='topRight'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
        mediaWidth={250}
        mediaHeight={145}
        src='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      />

    )
  );
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with video and overlaytitle position bottom left',
    () => (

      <CardViewMedia

        mediaComponent='iframe'
        overlayDirection='bottomLeft'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}

        mediaWidth={250}
        mediaHeight={145}
        src='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      />

    )
  );
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with video and overlaytitle position bottom right',
    () => (

      <CardViewMedia

        mediaComponent='iframe'
        overlayDirection='bottomRight'
        overlayColor={'rgba(30,24,40,0.35)'}
        overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
        overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
        overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
        mediaWidth={250}
        mediaHeight={145}
        src='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      />

    )
  );
storiesOf('CardViewMedia', module)
  .addDecorator(withKnobs)

  .add(
    'CardViewMedia with video and overlaytitle position top right icon',
    () => (

      <CardViewMedia
        overlayColor={'rgba(30,24,40,0.35)'}
        mediaComponent='iframe'
        overlayDirection='topLeft'
        overlayTitle={<BR.Components.Icon name='heart' size={20} color="white" />}
        mediaWidth={250}
        mediaHeight={145}
        src='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      />

    )
  );