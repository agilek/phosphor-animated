import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,129a116,116,0,0,0-144,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M200,129a116,116,0,0,0-144,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M200,129a116,116,0,0,0-144,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M200,129a116,116,0,0,0-144,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M53.67,130.94a116,116,0,0,1,148.66,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const WifiMediumIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
