import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 120 128 48 200 120" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="56 120 128 48 200 120" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="56 120 128 48 200 120" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="56 120 128 48 200 120" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M207.39,123.06A8,8,0,0,1,200,128H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,123.06Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 120 128 48 200 120 56 120" opacity="0.2" fill="currentColor"/><polygon points="56 120 128 48 200 120 56 120" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const ControlIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
