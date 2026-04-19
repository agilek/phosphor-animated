import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v64" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 160 224 160 224 200" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-24,0H144V176a8,8,0,0,1,8-8h56a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><path d="M216,48H40a8,8,0,0,0-8,8V200H160V168h64V56A8,8,0,0,0,216,48Z" opacity="0.2" fill="currentColor"/><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="160 200 160 168 224 168 224 200" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ChalkboardSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
