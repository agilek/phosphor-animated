import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 56 176 56 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 104 224 104 224 152 48 152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="144 152 144 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 56 176 56 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 104 224 104 224 152 48 152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="144 152 144 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 56 176 56 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 104 224 104 224 152 48 152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="144 152 144 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 56 176 56 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 104 224 104 224 152 48 152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="144 152 144 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 56 176 56 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 104 224 104 224 152 48 152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="144 152 144 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ChartBarHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
