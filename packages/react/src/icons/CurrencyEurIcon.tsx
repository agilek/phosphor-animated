import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,80a8,8,0,0,1,0,16H88v16h24a8,8,0,0,1,0,16H88.81a40,40,0,0,0,65.86,21.82,8,8,0,1,1,10.66,11.92A56,56,0,0,1,72.58,152H64a8,8,0,0,1,0-16h8V120H64a8,8,0,0,1,0-16h8.58a56,56,0,0,1,92.75-33.74,8,8,0,1,1-10.66,11.92A40,40,0,0,0,88.81,104Z" fill="currentColor"/></>,
  duotone: <><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CurrencyEurIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
