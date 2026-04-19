import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 200 128 120 208 200" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="48 200 128 120 208 200" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="48 200 128 120 208 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="48 200 128 120 208 200" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M147.31,128H208a8,8,0,0,0,5.66-13.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,128h60.69L42.34,194.34A8,8,0,0,0,48,208H208a8,8,0,0,0,5.66-13.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="48 200 128 120 208 200 48 200" opacity="0.2" fill="currentColor"/><polygon points="48 200 128 120 208 200 48 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
