import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 108 128 144 48 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleTaiChiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
