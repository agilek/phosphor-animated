import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 48 136 128 56 208" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="56 48 136 128 56 208" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="56 48 136 128 56 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="56 48 136 128 56 208" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M221.66,122.34l-80-80A8,8,0,0,0,128,48v60.69L61.66,42.34A8,8,0,0,0,48,48V208a8,8,0,0,0,13.66,5.66L128,147.31V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,221.66,122.34Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 48 136 128 56 208 56 48" opacity="0.2" fill="currentColor"/><polygon points="56 48 136 128 56 208 56 48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
