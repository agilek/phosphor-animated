import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 192 80 192 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 160 224 192 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 72 80 40 112 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="224 192 80 192 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 160 224 192 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 72 80 40 112 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="224 192 80 192 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 160 224 192 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 72 80 40 112 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="224 192 80 192 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 160 224 192 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 72 80 40 112 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="224 192 80 192 80 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 160 224 192 192 224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="48 72 80 40 112 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const VectorTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
