import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 104 176 136 80 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 104 176 136 80 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 104 176 136 80 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="176 104 176 136 80 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="176 104 176 136 80 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const KeyReturnIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
