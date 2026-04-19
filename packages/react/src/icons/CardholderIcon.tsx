import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="56" width="192" height="144" rx="16" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="56" width="192" height="144" rx="16" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="56" width="192" height="144" rx="16" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="56" width="192" height="144" rx="16" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M32,100H96a32,32,0,0,0,64,0h64" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48Zm-56,72a24,24,0,0,1-48,0,8,8,0,0,0-8-8H40V96H216v16H160A8,8,0,0,0,152,120ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z" fill="currentColor"/></>,
  duotone: <><path d="M128,152a32,32,0,0,0,32-32h64V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72v48H96A32,32,0,0,0,128,152Z" opacity="0.2" fill="currentColor"/><rect x="32" y="56" width="192" height="144" rx="16" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M32,120H96a32,32,0,0,0,64,0h64" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const CardholderIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
