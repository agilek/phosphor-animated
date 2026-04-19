import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="64 224 128 152 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,132s40-24,96-24,96,24,96,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="64 224 128 152 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128s40-24,96-24,96,24,96,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
