import * as React from 'react';
import { BlueRain, BlueRainConsumer } from '@blueeast/bluerain-os';
import { AppBarProperties } from '@blueeast/bluerain-ui-interfaces';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './style';

/**
 * An interface that extends the AppBarProperties interface
 *
 * @export MUIAppBarProperties
 * @interface MUIAppBarProperties
 * @extends {AppBarProperties}
 */
export interface MUIAppBarProperties extends AppBarProperties {
  color?: 'inherit' | 'primary' | 'default' | 'secondary' | undefined,
}

export const BlueRainAppBar: React.StatelessComponent<MUIAppBarProperties> = (props) => {
  const { position, style, titleStyle, ...others } = props;
  return (
    <BlueRainConsumer>
      {(BR: BlueRain) => (
        <AppBar
          position={position}
          {...others}
          style={style ? style : { position: 'sticky' }}>
          <Toolbar>
            <BR.Components.View style={styles.container}>
              <BR.Components.View style={styles.titleContainer}>
                {props.left}
                <Typography variant="h6" style={titleStyle}>{props.title}</Typography>
              </BR.Components.View>
              <BR.Components.View >
                {props.right}
              </BR.Components.View>
            </BR.Components.View>
          </Toolbar>
        </AppBar>
      )}
    </BlueRainConsumer>);
};


