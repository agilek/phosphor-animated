import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="208 136 128 216 48 136" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="208 136 128 216 48 136" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="208 136 128 216 48 136" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="208 136 128 216 48 136" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,128H147.31l66.35-66.34A8,8,0,0,0,208,48H48a8,8,0,0,0-5.66,13.66L108.69,128H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,208,128Z" fill="currentColor"/></>,
  duotone: <><polygon points="208 56 128 136 48 56 208 56" opacity="0.2" fill="currentColor"/><polyline points="208 136 128 216 48 136" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="208 56 128 136 48 56 208 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
