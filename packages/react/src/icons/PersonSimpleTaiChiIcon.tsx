import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="48" r="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="48" r="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="48" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="48" r="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="128 108 128 144 48 216" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M96,48a32,32,0,1,1,32,32A32,32,0,0,1,96,48ZM216,96H40a8,8,0,0,0,0,16h80v28.44L42.65,210.05A8,8,0,0,0,53.35,222l76.2-68.58L176,173.28V216a8,8,0,0,0,16,0V168a8,8,0,0,0-4.85-7.35L136,138.72V112h80a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="48" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="48" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="128 104 128 144 48 216" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="128 144 184 168 184 216" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleTaiChiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
