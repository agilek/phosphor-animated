import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M57.78,216a72,72,0,0,1,140.44,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M57.78,216a72,72,0,0,1,140.44,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M57.78,216a72,72,0,0,1,140.44,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M57.78,216a72,72,0,0,1,140.44,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M57.78,216a72,72,0,0,1,140.44,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const UserSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
