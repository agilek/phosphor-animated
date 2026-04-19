import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,112a40,40,0,0,1-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,112a40,40,0,0,1-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,112a40,40,0,0,1-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,124a40,40,0,0,1-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,112a40,40,0,0,1-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ShoppingBagOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
