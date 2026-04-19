import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="144" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="48" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="144" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="48" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="144" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="48" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="144" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="48" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="144" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="48" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="144" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="48" y="48" width="60" height="60" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="148" y="48" width="60" height="60" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="48" y="148" width="60" height="60" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="148" y="148" width="60" height="60" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="144" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="144" y="48" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="48" y="144" width="64" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SquaresFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
