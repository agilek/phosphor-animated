import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,160H88a8,8,0,0,1,0-16,16,16,0,0,0,16-16V136H88a8,8,0,0,1,0-16h16V96a40,40,0,0,1,60-34.64,8,8,0,0,1-8,13.85A24,24,0,0,0,120,96v24h16a8,8,0,0,1,0,16H120v16a31.71,31.71,0,0,1-4.31,16H168a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M168,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CurrencyGbpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
