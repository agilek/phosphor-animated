import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 152 32 104 80 56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 80 104 128 56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="80 152 32 104 80 56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 80 104 128 56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="80 152 32 104 80 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 80 104 128 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="80 152 32 104 80 56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 152 88 104 136 56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H88" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M85.66,146.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L43.31,104ZM136,96.3V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,136,152V112.37A88.11,88.11,0,0,1,216,200a8,8,0,0,0,16,0A104.15,104.15,0,0,0,136,96.3Z" fill="currentColor"/></>,
  duotone: <><polyline points="80 104 128 56 128 152 80 104" opacity="0.2" fill="currentColor"/><polyline points="80 152 32 104 80 56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 152 80 104 128 56 128 152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowBendDoubleUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
