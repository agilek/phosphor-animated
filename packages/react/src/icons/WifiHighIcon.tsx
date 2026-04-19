import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="204" r="8" fill="currentColor"/><path d="M232,93.19a164,164,0,0,0-208,0" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,129a116,116,0,0,0-144,0" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="204" r="10" fill="currentColor"/><path d="M232,93.19a164,164,0,0,0-208,0" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,129a116,116,0,0,0-144,0" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="204" r="12" fill="currentColor"/><path d="M232,93.19a164,164,0,0,0-208,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,129a116,116,0,0,0-144,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="204" r="16" fill="currentColor"/><path d="M232,93.19a164,164,0,0,0-208,0" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,129a116,116,0,0,0-144,0" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M244.35,92.8l-104,125.43A15.93,15.93,0,0,1,128,224h0a15.93,15.93,0,0,1-12.31-5.77L11.65,92.8A15.65,15.65,0,0,1,8.11,80.91,15.93,15.93,0,0,1,14.28,70.1,186.67,186.67,0,0,1,128,32,186.67,186.67,0,0,1,241.72,70.1a15.93,15.93,0,0,1,6.17,10.81A15.65,15.65,0,0,1,244.35,92.8Z" fill="currentColor"/></>,
  duotone: <><path d="M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z" opacity="0.2" fill="currentColor"/><path d="M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const WifiHighIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
