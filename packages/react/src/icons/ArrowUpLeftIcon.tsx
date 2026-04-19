import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 64 64 64 168" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 64 64 64 168" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 64 64 64 168" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 64 64 64 168" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M197.66,197.66a8,8,0,0,1-11.32,0L116,127.31,69.66,173.66A8,8,0,0,1,56,168V64a8,8,0,0,1,8-8H168a8,8,0,0,1,5.66,13.66L127.31,116l70.35,70.34A8,8,0,0,1,197.66,197.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="168 64 64 64 64 168 168 64" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="168 64 64 64 64 168 168 64" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
