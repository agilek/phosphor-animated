import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,128h88a88,88,0,1,1-20.11-56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,128h88a88,88,0,1,1-20.11-56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,128h88a88,88,0,1,1-20.11-56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M128,128h88a88,88,0,1,1-20.11-56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,184A80,80,0,1,1,181.34,68.37a8,8,0,0,1-10.67,11.92A64,64,0,1,0,191.5,136H128a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8A80.09,80.09,0,0,1,128,208Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="88" opacity="0.2" fill="currentColor"/><path d="M128,128h88a88,88,0,1,1-20.11-56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const GoogleLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
