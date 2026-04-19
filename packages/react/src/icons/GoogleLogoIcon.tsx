import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,128h88a88,88,0,1,1-20.11-56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,128h88a88,88,0,1,1-20.11-56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,128h88a88,88,0,1,1-20.11-56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M128,128h88a88,88,0,1,1-20.11-56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,128h88a88,88,0,1,1-20.11-56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const GoogleLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
