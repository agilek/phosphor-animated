import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 152 224 104 176 56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 152 224 104 176 56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 152 224 104 176 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="176 152 224 104 176 56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h59" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M229.66,109.66l-48,48A8,8,0,0,1,168,152V112h-3a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h3V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V216a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><polygon points="176 152 224 104 176 56 176 152" opacity="0.2" fill="currentColor"/><polygon points="176 152 224 104 176 56 176 152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 216 32 216 32 88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,176a96,96,0,0,1,93-72h11" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ShareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
