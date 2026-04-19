import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="32 176 128 232 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="32 176 128 232 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="32 176 128 232 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="32 176 128 232 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="32 176 128 232 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const StackIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
