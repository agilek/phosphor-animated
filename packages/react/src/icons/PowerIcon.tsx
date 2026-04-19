import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm-8,40a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0Zm8,144A80,80,0,0,1,83.55,61.48a8,8,0,1,1,8.9,13.29,64,64,0,1,0,71.1,0,8,8,0,1,1,8.9-13.29A80,80,0,0,1,128,208Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="88" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
