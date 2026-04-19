import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="88" width="168" height="80" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="88" width="168" height="80" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="88" width="168" height="80" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="88" width="160" height="80" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM224,80H72A16,16,0,0,0,56,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80Z" fill="currentColor"/></>,
  duotone: <><rect x="64" y="88" width="168" height="80" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="88" width="168" height="80" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AlignLeftSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
