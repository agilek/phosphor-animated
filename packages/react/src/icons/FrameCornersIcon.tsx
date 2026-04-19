import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 80 192 80 192 112" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="160 80 192 80 192 112" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="160 80 192 80 192 112" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="152 88 184 88 184 120" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 168 72 168 72 136" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><polyline points="160 80 192 80 192 112" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 176 64 176 64 144" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FrameCornersIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
