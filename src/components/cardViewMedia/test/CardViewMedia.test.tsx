/* import { CardViewMedia } from '../'
import renderer from 'react-test-renderer';
import React from 'react';
import "jest";
import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
function handleTextInputChange() {
    console.log('I am clicked');
}
test('Cardview componenet overlay title direction top left', () => {
    const cardviewmedia = renderer.create(
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
        </BlueRainConsumer >
    ).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('topeft');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardview componenet overlay title with top right direction', () => {
    const cardviewmedia = renderer.create(
        <BlueRainConsumer>
            {(BR: BlueRain) =>
                <CardViewMedia

                    overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
                    overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
                    overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
                    overlayColor={'rgba(30,24,40,0.35)'}
                    mediaComponent='img'
                    overlayDirection='topRight'
                    mediaWidth={250}
                    mediaHeight={250}
                    src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
                />

            }
        </BlueRainConsumer >
    ).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('topRIght');
    expect(cardviewmedia).toMatchSnapshot();

});
test('Cardviewmeida component image and  overlay title in bottom left  ', () => {
    const cardviewmedia = renderer.create(
        <BlueRainConsumer>
            {(BR: BlueRain) =>
                <CardViewMedia

                    overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
                    overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
                    overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
                    overlayColor={'rgba(30,24,40,0.35)'}
                    mediaComponent='img'
                    overlayDirection='bottomLeft'
                    mediaWidth={250}
                    mediaHeight={250}
                    src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
                />

            }
        </BlueRainConsumer >
    ).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('bottomLeft');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardviewmeida component image and  overlay title in bottom right  ', () => {
    const cardviewmedia = renderer.create(
        <BlueRainConsumer>
            {(BR: BlueRain) =>
                <CardViewMedia

                    overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
                    overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
                    overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
                    overlayColor={'rgba(30,24,40,0.35)'}
                    mediaComponent='img'
                    overlayDirection='bottomRight'
                    mediaWidth={250}
                    mediaHeight={250}
                    src="https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60"
                />

            }
        </BlueRainConsumer >
    ).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('bottomRight');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardviewmeida component video and  overlay title in bottom right  ', () => {
    const cardviewmedia = renderer.create(
        <BlueRainConsumer>
            {(BR: BlueRain) =>
                <CardViewMedia

                    overlayTitle={<BR.Components.View ><BR.Components.Overline style={{ color: 'white' }}>Overline</BR.Components.Overline></BR.Components.View>}
                    overlaySubTiltle={<BR.Components.View ><BR.Components.H5 style={{ color: 'white' }}>Basics of Brand Identity</BR.Components.H5></BR.Components.View >}
                    overlayOverline={<BR.Components.View ><BR.Components.Subtitle2 style={{ color: 'white' }}>Subtitle2</BR.Components.Subtitle2></BR.Components.View >}
                    overlayColor={'rgba(30,24,40,0.35)'}
                    mediaComponent='img'
                    overlayDirection='bottomRight'
                    mediaWidth={250}
                    mediaHeight={250}
                    src='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                />

            }
        </BlueRainConsumer >
    ).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('bottomRight');
    expect(cardviewmedia).toMatchSnapshot();
}); */