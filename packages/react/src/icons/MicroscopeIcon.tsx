import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="24" width="64" height="120" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,72a80,80,0,0,1,48,144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="24" width="64" height="120" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,72a80,80,0,0,1,48,144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="24" width="64" height="120" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,72a80,80,0,0,1,48,144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="24" width="64" height="112" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,72a80,80,0,0,1,48,144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="24" width="64" height="120" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,72a80,80,0,0,1,48,144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MicroscopeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
