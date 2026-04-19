import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 56 216 128 144 200" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 56 216 128 144 200" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 56 216 128 144 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="144 56 216 128 144 200" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="144 56 216 128 144 200 144 56" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="144 56 216 128 144 200 144 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
