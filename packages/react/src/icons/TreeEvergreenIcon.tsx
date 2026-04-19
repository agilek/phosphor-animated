import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M231.19,195.51A8,8,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a8,8,0,0,1-6.31-12.91l46-59.09H48a8,8,0,0,1-6.34-12.88l80-104a8,8,0,0,1,12.68,0l80,104A8,8,0,0,1,208,128H184.36l45.95,59.09A8,8,0,0,1,231.19,195.51Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" opacity="0.2" fill="currentColor"/><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const TreeEvergreenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
