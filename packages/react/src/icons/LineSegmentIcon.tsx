import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="64" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="64" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="64" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="64" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="64" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="64" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="64" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="64" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="64" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="64" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LineSegmentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
