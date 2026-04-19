import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 200 120 168 192 168 192 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="64 200 64 80 192 80 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 200 120 168 192 168 192 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="64 200 64 80 192 80 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 200 120 168 192 168 192 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="64 200 64 80 192 80 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 200 120 160 184 160 184 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="72 200 72 88 184 88 184 120" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="120 200 120 168 192 168 192 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="64 200 64 80 192 80 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ChalkboardIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
