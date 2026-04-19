import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="72 112 72 208 168 208" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="72 112 72 208 168 208" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="72 112 72 208 168 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="72 112 72 208 168 208" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M232,48a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,48ZM178.34,90.34,120,148.69,77.66,106.34A8,8,0,0,0,64,112v96a8,8,0,0,0,8,8h96a8,8,0,0,0,5.66-13.66L131.31,160l58.35-58.34a8,8,0,0,0-11.32-11.32Z" fill="currentColor"/></>,
  duotone: <><polygon points="72 112 72 208 168 208 72 112" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="72 112 72 208 168 208 72 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowLineDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
