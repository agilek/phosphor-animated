import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 32 32 64 64 96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="64 32 32 64 64 96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="64 32 32 64 64 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="60 32 28 64 60 96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="108 32 140 64 108 96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M180,48h20a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M200,40H168a16,16,0,0,0-16-16H32A16,16,0,0,0,16,40v80a16,16,0,0,0,16,16h8v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM106.34,61.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L124.69,80Zm-64,24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,77.66,61.66L59.31,80,77.66,98.34a8,8,0,0,1-11.32,11.32ZM200,200H56V136h96a16,16,0,0,0,16-16V56h32Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="16" width="136" height="96" rx="16" opacity="0.2" fill="currentColor"/><polyline points="64 32 32 64 64 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 32 136 64 104 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,48h24a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const CodeBlockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
