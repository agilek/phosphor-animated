import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="12" y="64" width="200" height="128" rx="16" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M72,96v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H64A8,8,0,0,1,72,96ZM224,80v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="64" width="200" height="128" rx="16" opacity="0.2" fill="currentColor"/><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BatteryLowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
