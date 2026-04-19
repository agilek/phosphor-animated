import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="180" cy="164" r="28" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="180" cy="164" r="28" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="180" cy="164" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="180" cy="164" r="28" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M212.92,17.71a7.89,7.89,0,0,0-6.86-1.46l-128,32A8,8,0,0,0,72,56V166.1A36,36,0,1,0,88,196V102.25l112-28V134.1A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.71Z" fill="currentColor"/></>,
  duotone: <><circle cx="180" cy="164" r="28" opacity="0.2" fill="currentColor"/><circle cx="52" cy="196" r="28" opacity="0.2" fill="currentColor"/><circle cx="180" cy="164" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const MusicNotesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
