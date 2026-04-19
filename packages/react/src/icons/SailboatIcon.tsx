import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 136 216 136 136 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 176 136 8 32 136 136 136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 136 216 136 136 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 176 136 8 32 136 136 136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 136 216 136 136 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 176 136 8 32 136 136 136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 136 216 136 136 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 176 136 12 32 136 136 136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 136 216 136 136 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 176 136 8 32 136 136 136" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SailboatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
