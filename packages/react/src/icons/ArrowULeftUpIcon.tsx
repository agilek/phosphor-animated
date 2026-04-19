import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 80 88 32 40 80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="136 80 88 32 40 80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="136 80 88 32 40 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="136 80 88 32 40 80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,80v88a64,64,0,0,1-128,0V88H40a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,136,88H96v80a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="136 80 88 32 40 80 136 80" opacity="0.2" fill="currentColor"/><polygon points="136 80 88 32 40 80 136 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowULeftUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
