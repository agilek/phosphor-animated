import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M150.54,176.7A48,48,0,0,0,224,136c0-64-96-112-96-112S32,72,32,136a48,48,0,0,0,73.46,40.7L96,224h64Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M232,136a56,56,0,0,1-83.4,48.82l11.06,36.88A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l11.06-36.88A56,56,0,0,1,24,136c0-32,17.65-62.84,51-89.27a234.14,234.14,0,0,1,49.89-30.11,7.93,7.93,0,0,1,6.16,0A234.14,234.14,0,0,1,181,46.73C214.35,73.16,232,104,232,136Z" fill="currentColor"/></>,
  duotone: <><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" opacity="0.2" fill="currentColor"/><path d="M128,24S32,72,32,136a48,48,0,0,0,79.55,36.18L96,224h64l-15.55-51.82A48,48,0,0,0,224,136C224,72,128,24,128,24Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const SpadeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
