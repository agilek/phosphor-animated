import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="32" width="160" height="192" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="32" width="160" height="192" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="32" width="160" height="192" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="32" width="160" height="192" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="32" width="160" height="192" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const StairsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
