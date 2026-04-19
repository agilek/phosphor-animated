import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 144 208 176 176 208" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="80 112 48 80 80 48" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="176 144 208 176 176 208" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="80 112 48 80 80 48" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="176 144 208 176 176 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="80 112 48 80 80 48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="176 144 208 176 176 208" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="80 112 48 80 80 48" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M213.66,181.66l-32,32A8,8,0,0,1,168,208V184H48a8,8,0,0,1,0-16H168V144a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64A8,8,0,0,0,88,112V88H208a8,8,0,0,0,0-16H88V48a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="48" y="80" width="160" height="96" opacity="0.2" fill="currentColor"/><polyline points="176 144 208 176 176 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="80 112 48 80 80 48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const ArrowsLeftRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
