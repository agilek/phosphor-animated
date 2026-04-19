import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="120 176 168 224 216 176" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="120 176 168 224 216 176" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="120 176 168 224 216 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="120 176 168 224 216 176" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56V224" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M221.66,181.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,120,168h40V88a48,48,0,0,0-96,0v88a8,8,0,0,1-16,0V88a64,64,0,0,1,128,0v80h40a8,8,0,0,1,5.66,13.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="120 176 168 224 216 176 120 176" opacity="0.2" fill="currentColor"/><polygon points="120 176 168 224 216 176 120 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M56,176V88a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56v88" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowURightDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
