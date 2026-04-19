import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="16 104 128 168 240 104 128 40 16 104" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="16 104 128 168 240 104 128 40 16 104" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="16 104 128 168 240 104 128 40 16 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="16 100 128 164 240 100 128 36 16 100" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="16 148 128 212 240 148" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111Z" fill="currentColor"/><path d="M236,137.05,128,198.79,20,137.05A8,8,0,1,0,12,151l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,1,0-7.94-13.9Z" fill="currentColor"/></>,
  duotone: <><polygon points="16 104 128 168 240 104 128 40 16 104" opacity="0.2" fill="currentColor"/><polygon points="16 104 128 168 240 104 128 40 16 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const StackSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
