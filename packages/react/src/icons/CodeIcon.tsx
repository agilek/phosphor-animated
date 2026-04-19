import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 88 16 128 64 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 88 240 128 192 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="64 88 16 128 64 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 88 240 128 192 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="64 88 16 128 64 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 88 240 128 192 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="64 88 16 128 64 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 88 240 128 192 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="64 88 16 128 64 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 88 240 128 192 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CodeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
