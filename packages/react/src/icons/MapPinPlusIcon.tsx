import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm32,96H136v24a8,8,0,0,1-16,0V112H96a8,8,0,0,1,0-16h24V72a8,8,0,0,1,16,0V96h24a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" opacity="0.2" fill="currentColor"/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MapPinPlusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
