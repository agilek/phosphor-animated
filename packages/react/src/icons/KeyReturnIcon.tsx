import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 104 176 136 80 136" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="176 104 176 136 80 136" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="176 104 176 136 80 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="176 104 176 136 80 136" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-32,96a8,8,0,0,1-8,8H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,128H168V104a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><polyline points="176 104 176 136 80 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 112 80 136 104 160" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const KeyReturnIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
