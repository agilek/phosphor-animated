import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><circle cx="184" cy="144" r="32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"1.2s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><circle cx="184" cy="144" r="32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"1.2s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><circle cx="184" cy="144" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"1.2s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><circle cx="184" cy="144" r="32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"1.2s"}}/></>,
  fill: <><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z" fill="currentColor"/></>,
  duotone: <><circle cx="184" cy="144" r="32" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><circle cx="184" cy="144" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"1.2s"}}/></>,
};

export const ListMagnifyingGlassIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
