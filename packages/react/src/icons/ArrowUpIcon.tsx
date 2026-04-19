import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="56 112 128 40 200 112" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="56 112 128 40 200 112" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="56 112 128 40 200 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="56 112 128 40 200 112" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 112 128 40 200 112 56 112" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="56 112 128 40 200 112 56 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
