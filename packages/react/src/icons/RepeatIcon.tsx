import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 88 224 64 200 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,128A64,64,0,0,1,96,64H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="56 168 32 192 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,128a64,64,0,0,1-64,64H32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="200 88 224 64 200 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,128A64,64,0,0,1,96,64H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="56 168 32 192 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,128a64,64,0,0,1-64,64H32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="200 88 224 64 200 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,128A64,64,0,0,1,96,64H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="56 168 32 192 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,128a64,64,0,0,1-64,64H32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="200 88 224 64 200 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,128A64,64,0,0,1,96,64H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="56 168 32 192 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,128a64,64,0,0,1-64,64H32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="200 88 224 64 200 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,128A64,64,0,0,1,96,64H224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="56 168 32 192 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,128a64,64,0,0,1-64,64H32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const RepeatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
