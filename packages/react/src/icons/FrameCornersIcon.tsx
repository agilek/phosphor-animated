import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 80 192 80 192 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="160 80 192 80 192 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="160 80 192 80 192 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="152 88 184 88 184 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 168 72 168 72 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="160 80 192 80 192 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FrameCornersIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
