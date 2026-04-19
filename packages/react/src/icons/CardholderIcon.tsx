import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="56" width="192" height="144" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="56" width="192" height="144" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="56" width="192" height="144" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="56" width="192" height="144" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,100H96a32,32,0,0,0,64,0h64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="56" width="192" height="144" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CardholderIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
