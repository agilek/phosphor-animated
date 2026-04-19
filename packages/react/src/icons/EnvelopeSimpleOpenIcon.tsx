import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 145.46 152 110.55 152 32 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EnvelopeSimpleOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
