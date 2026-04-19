import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 80 88 32 40 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="136 80 88 32 40 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="136 80 88 32 40 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="136 80 88 32 40 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="136 80 88 32 40 80 136 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowULeftUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
