import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 32 192 80 128 128 128 32" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><polygon points="128 32 192 80 128 128 128 32" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><polygon points="128 32 192 80 128 128 128 32" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><polygon points="128 32 192 80 128 128 128 32" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M200,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,128,232a8,8,0,0,1-8-8V144L68.8,182.4a8,8,0,0,1-9.6-12.8L114.67,128,59.2,86.4a8,8,0,0,1,9.6-12.8L120,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L141.33,128l55.47,41.6A8,8,0,0,1,200,176Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 32 192 80 128 128 128 32" opacity="0.2" fill="currentColor"/><polygon points="128 128 192 176 128 224 128 128" opacity="0.2" fill="currentColor"/><polygon points="128 32 192 80 128 128 128 32" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const BluetoothIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
