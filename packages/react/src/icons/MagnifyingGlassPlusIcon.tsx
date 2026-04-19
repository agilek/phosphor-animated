import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="112" cy="112" r="80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="112" cy="112" r="80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="112" cy="112" r="80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="112" cy="112" r="80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><circle cx="112" cy="112" r="80" opacity="0.2" fill="currentColor"/><circle cx="112" cy="112" r="80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MagnifyingGlassPlusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
