import {
  blueA400, darkBlack, fullBlack, grey100, grey300, grey500,
  white,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  spacing,
  fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
  palette: {
    primary1Color: '#343a40',
    primary2Color: '#2A3945',
    primary3Color: '#BBDEFB',
    accent1Color: '#63d8f1',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: '#212121',
    alternateTextColor: '#FFFFFF',
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blueA400,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

