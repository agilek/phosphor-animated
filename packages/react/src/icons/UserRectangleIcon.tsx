import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M60.1,208a72,72,0,0,1,135.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M60.1,208a72,72,0,0,1,135.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M60.1,208a72,72,0,0,1,135.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.48,208a72,72,0,0,1,129,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="120" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M60.1,208a72,72,0,0,1,135.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const UserRectangleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
