import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="88" y="24" width="80" height="144" rx="40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,128a72,72,0,0,1-144,0" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="88" y="24" width="80" height="144" rx="40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,128a72,72,0,0,1-144,0" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="88" y="24" width="80" height="144" rx="40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,128a72,72,0,0,1-144,0" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="88" y="24" width="80" height="144" rx="40" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,128a80,80,0,0,1-160,0" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z" fill="currentColor"/></>,
  duotone: <><rect x="88" y="24" width="80" height="144" rx="40" opacity="0.2" fill="currentColor"/><rect x="88" y="24" width="80" height="144" rx="40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,128a72,72,0,0,1-144,0" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MicrophoneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
