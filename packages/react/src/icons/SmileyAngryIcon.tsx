import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 88 128 120 176 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,184c7.6-5.05,14.19-8,24-8s16.4,2.95,24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 88 128 120 176 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,184c7.6-5.05,14.19-8,24-8s16.4,2.95,24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 88 128 120 176 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,184c7.6-5.05,14.19-8,24-8s16.4,2.95,24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="92 92 128 116 164 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M108,177.5a39.11,39.11,0,0,1,40,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 88 128 120 176 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,184c7.6-5.05,14.19-8,24-8s16.4,2.95,24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SmileyAngryIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
