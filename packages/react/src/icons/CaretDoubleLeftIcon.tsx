import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 208 120 128 200 48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="200 208 120 128 200 48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="200 208 120 128 200 48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="200 208 120 128 200 48" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M203.06,40.61a8,8,0,0,0-8.72,1.73L128,108.69V48a8,8,0,0,0-13.66-5.66l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,128,208V147.31l66.34,66.35A8,8,0,0,0,208,208V48A8,8,0,0,0,203.06,40.61Z" fill="currentColor"/></>,
  duotone: <><polygon points="200 208 120 128 200 48 200 208" opacity="0.2" fill="currentColor"/><polygon points="200 208 120 128 200 48 200 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
