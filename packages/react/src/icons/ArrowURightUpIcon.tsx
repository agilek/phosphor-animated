import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="120 80 168 32 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="120 80 168 32 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="120 80 168 32 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="120 80 168 32 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="120 80 168 32 216 80 120 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,80v88a56,56,0,0,0,56,56h0a56,56,0,0,0,56-56V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowURightUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
