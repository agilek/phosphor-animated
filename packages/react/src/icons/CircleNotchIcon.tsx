import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,176A72,72,0,0,1,92,65.64a8,8,0,0,1,8,13.85,56,56,0,1,0,56,0,8,8,0,0,1,8-13.85A72,72,0,0,1,128,200Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><path d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CircleNotchIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
