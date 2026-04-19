import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="64" r="24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,120H32a96,96,0,0,0,192,0H200" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="64" r="24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,120H32a96,96,0,0,0,192,0H200" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="64" r="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,120H32a96,96,0,0,0,192,0H200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="64" r="24" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,120H32a96,96,0,0,0,192,0H200" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M232,120a104,104,0,0,1-208,0,8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40.36A88.15,88.15,0,0,0,120,207.63V90.83a28,28,0,1,1,16,0v116.8A88.15,88.15,0,0,0,215.64,128H200a8,8,0,0,1,0-16h24A8,8,0,0,1,232,120Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="64" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="64" r="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,120H32a96,96,0,0,0,192,0H200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AnchorSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
