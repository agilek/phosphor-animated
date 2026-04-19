import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 160 224 160 224 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChalkboardSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
