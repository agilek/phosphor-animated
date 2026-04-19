import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 128 48 80 96 32" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 48 80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="96 128 48 80 96 32" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 48 80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="192 224 192 80 48 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 128 48 80 96 32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="192 224 192 80 48 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="96 128 48 80 96 32" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 48 80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M200,80V224a8,8,0,0,1-16,0V88H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,32V72h88A8,8,0,0,1,200,80Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 128 48 80 96 32 96 128" opacity="0.2" fill="currentColor"/><polygon points="96 128 48 80 96 32 96 128" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 96 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
