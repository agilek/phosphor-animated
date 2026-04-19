import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="140" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="140" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="140" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="144" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="88" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="140" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const LockKeyOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
