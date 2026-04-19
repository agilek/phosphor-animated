import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="116" cy="156" r="8" fill="currentColor"/></>,
  light: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="116" cy="156" r="10" fill="currentColor"/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="116" cy="156" r="12" fill="currentColor"/></>,
  bold: <><rect x="12" y="64" width="200" height="128" rx="16" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="112" cy="152" r="16" fill="currentColor"/></>,
  fill: <><path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56ZM108,88a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,116,176ZM256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="64" width="200" height="128" rx="16" opacity="0.2" fill="currentColor"/><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="116" cy="156" r="12" fill="currentColor"/></>,
};

export const BatteryWarningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
