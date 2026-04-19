import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,166a51,51,0,0,1,48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,110a119,119,0,0,1,112,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,138a85,85,0,0,1,80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,166a51,51,0,0,1,48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,110a119,119,0,0,1,112,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,138a85,85,0,0,1,80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,166a51,51,0,0,1,48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,110a119,119,0,0,1,112,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,138a85,85,0,0,1,80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,122a119,119,0,0,1,112,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,158a85,85,0,0,1,80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,166a51,51,0,0,1,48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,110a119,119,0,0,1,112,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,138a85,85,0,0,1,80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SpotifyLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
