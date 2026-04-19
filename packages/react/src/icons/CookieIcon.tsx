import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CookieIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
