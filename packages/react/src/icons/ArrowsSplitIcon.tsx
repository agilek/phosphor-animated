import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 184 64 216 32 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 184 192 216 160 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 24 128 72 64 136 64 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 72 192 136 192 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="96 184 64 216 32 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 184 192 216 160 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 24 128 72 64 136 64 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 72 192 136 192 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="96 184 64 216 32 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 184 192 216 160 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 24 128 72 64 136 64 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 72 192 136 192 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="96 184 64 216 32 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 184 192 216 160 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 24 128 72 64 136 64 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 72 192 136 192 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="96 184 64 216 32 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 184 192 216 160 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 24 128 72 64 136 64 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 72 192 136 192 216" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ArrowsSplitIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
