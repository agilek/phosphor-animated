import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,80,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const LockSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
