import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M150.54,176.7A48,48,0,0,0,224,136c0-64-96-112-96-112S32,72,32,136a48,48,0,0,0,73.46,40.7L96,224h64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const SpadeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
