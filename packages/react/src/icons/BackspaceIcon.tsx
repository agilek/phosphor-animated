import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BackspaceIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
