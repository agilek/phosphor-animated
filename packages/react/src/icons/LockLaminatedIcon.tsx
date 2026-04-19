import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const LockLaminatedIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
