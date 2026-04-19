import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 24 128 72 176 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TelevisionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
