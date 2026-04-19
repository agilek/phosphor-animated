import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="120" height="120" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="40" y="40" width="120" height="120" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="40" y="40" width="120" height="120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="40" y="40" width="120" height="120" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm160,56H104V168h56a8,8,0,0,0,8-8V104h40Z" fill="currentColor"/></>,
  duotone: <><rect x="96" y="96" width="64" height="64" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="120" height="120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const IntersectSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
