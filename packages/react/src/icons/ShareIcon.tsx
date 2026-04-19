import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="176 152 224 104 176 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="176 152 224 104 176 56 176 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h11" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ShareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
