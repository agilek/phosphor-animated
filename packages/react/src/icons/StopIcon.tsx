import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="48" width="160" height="160" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><rect x="48" y="48" width="160" height="160" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="48" y="48" width="160" height="160" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="48" y="48" width="160" height="160" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" fill="currentColor"/></>,
  duotone: <><rect x="48" y="48" width="160" height="160" rx="8" opacity="0.2" fill="currentColor"/><rect x="48" y="48" width="160" height="160" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const StopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
