import glamorous from 'glamorous';
import { darken } from 'polished';
import { colours } from '../../styles/colours';
import { fonts } from '../../styles/fonts';

interface IProps {
  textcolour?: string;
  background?: string;
  fontsize?: string;
  fullWidth?: boolean;
}

const sizes = {
  default: 16,
  small: 12,
  large: 20,
  xlarge: 24,
};

const Button = glamorous.button<IProps>(
  {
    padding: '5px 25px',
    border: 0,
    display: 'inline-block',
    boxShadow: 'none',
    borderRadius: 0,
    appearance: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    textShadow: 'none',
    textDecoration: 'none',
    fontFamily: fonts.$theSunMedium,
    WebkitFontSmoothing: 'antialiased',
    ':focus': {
      outline: 0,
    },
  },
  ({ textcolour, background, fontsize, fullWidth }) => ({
    color: textcolour ? textcolour : colours.$white,
    background: background ? background : colours.$main,
    fontSize: fontsize ? sizes[fontsize] : sizes['default'],
    ':hover': {
      background: darken(0.1, background ? background : colours.$main),
    },
    width: fullWidth ? '100%' : 'auto',
  }),
);

export default Button;
