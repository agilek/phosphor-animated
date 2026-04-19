import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,88a40,40,0,0,1-80,0" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,88a40,40,0,0,1-80,0" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,88a40,40,0,0,1-80,0" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,88a40,40,0,0,1-80,0" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-88,96A48.05,48.05,0,0,1,80,88a8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0A48.05,48.05,0,0,1,128,136Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,88a40,40,0,0,1-80,0" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ShoppingBagIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
