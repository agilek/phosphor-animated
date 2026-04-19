import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,224a48,48,0,0,1,0-96,48,48,0,0,0,0-96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const YinYangIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
