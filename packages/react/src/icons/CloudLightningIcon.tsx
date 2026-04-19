import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CloudLightningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
