import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 56 192 56 192 152" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 56 192 56 192 152" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 56 192 56 192 152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 56 192 56 192 152" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM80,176a8,8,0,0,0,5.66-2.34L144,115.31l42.34,42.35A8,8,0,0,0,200,152V56a8,8,0,0,0-8-8H96a8,8,0,0,0-5.66,13.66L132.69,104,74.34,162.34A8,8,0,0,0,80,176Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 56 192 56 192 152 96 56" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="96 56 192 56 192 152 96 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowLineUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
