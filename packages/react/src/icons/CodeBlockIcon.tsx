import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 32 32 64 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="64 32 32 64 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="64 32 32 64 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="60 32 28 64 60 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="108 32 140 64 108 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M180,48h20a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="64 32 32 64 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CodeBlockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
