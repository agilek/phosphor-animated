import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="32 176 128 232 144 222.67" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="32 176 128 232 144 222.67" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="32 176 128 232 144 222.67" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="32 176 128 232 144 222.67" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="32 176 128 232 144 222.67" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const StackMinusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
