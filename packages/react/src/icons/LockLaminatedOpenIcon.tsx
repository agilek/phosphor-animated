import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const LockLaminatedOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
