import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 56 40 128 112 200" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 56 40 128 112 200" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 56 40 128 112 200" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 56 40 128 112 200" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z" fill="currentColor"/></>,
  duotone: <><polygon points="112 56 40 128 112 200 112 56" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="112 56 40 128 112 200 112 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
