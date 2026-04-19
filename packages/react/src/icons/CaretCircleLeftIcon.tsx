import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 88 104 128 144 168" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 88 104 128 144 168" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 88 104 128 144 168" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 88 104 128 144 168" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm21.66,138.34a8,8,0,0,1-11.32,11.32l-40-40a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,11.32L115.31,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 88 104 128 144 168" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretCircleLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
