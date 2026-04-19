import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216,40H68.53a16.12,16.12,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11h0A16.11,16.11,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM165.66,146.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L124.69,128l-18.35-18.34a8,8,0,1,1,11.31-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128Z" fill="currentColor"/></>,
  duotone: <><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" opacity="0.2" fill="currentColor"/><path d="M61.67,204.12,16,128,61.67,51.88A8,8,0,0,1,68.53,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.53A8,8,0,0,1,61.67,204.12Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const BackspaceIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
