import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
// import { Button } from '../../Button';
import Button from 'material-ui/Button';
import { Drawer } from '../../Drawer';
import { MUIDrawerProperties } from '../Drawer.component';
import React from 'react';

export class DrawerTest extends React.Component<MUIDrawerProperties, { open?: boolean }> {
  side: any = 'left';
  constructor(props: MUIDrawerProperties) {
    super(props);
    this.state = {
      open: true,
    };
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    console.log('onClose Activated');
  }
  render() {
    return (
      <BlueRainConsumer>
        {
          (BR: BlueRain) => (
            <BR.Components.View>

              <Drawer
                variant={this.props.variant}
                open={this.state.open}
                tweenDuration={500}
                content={
                  <Button
                    color={'primary'}
                    onClick={() => { this.setState({ open: false }); }}
                  >
                    Click to Close
                  </Button>
                }
                side={this.side}
                onClose={() => { this.setState({ open: false }); }}
                elevation={200}
              />

              <BR.Components.Text>
                Hello World
              </BR.Components.Text>

              <Button
                color={'primary'}
                onClick={() => { this.side= 'left'; this.setState({ open: true }); }}
              >
                Left
              </Button>
              <Button
                color={'primary'}
                onClick={() => { this.side= 'right'; this.setState({ open: true }); }}
              >
                Right
              </Button>
              <Button
                color={'primary'}
                onClick={() => { this.side= 'top'; this.setState({ open: true }); }}
              >
                Top
              </Button>
              <Button
                color={'primary'}
                onClick={() => { this.side= 'bottom'; this.setState({ open: true }); }}
              >
                Bottom
              </Button>
            </BR.Components.View>

          )
        }
      </BlueRainConsumer>
    );
  }
}

export default DrawerTest;