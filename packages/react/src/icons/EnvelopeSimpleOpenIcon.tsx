import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z" fill="currentColor"/></>,
  duotone: <><polygon points="224 96 145.46 152 110.55 152 32 96 128 32 224 96" opacity="0.2" fill="currentColor"/><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EnvelopeSimpleOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
