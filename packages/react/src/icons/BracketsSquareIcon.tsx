import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 40 40 40 40 216 80 216" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 40 40 40 40 216 80 216" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 40 40 40 40 216 80 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 40 40 40 40 216 80 216" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,176a8,8,0,0,1,0,16H72a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H80v96Zm88,8a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24V80H152a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" opacity="0.2" fill="currentColor"/><polyline points="80 40 40 40 40 216 80 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BracketsSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
