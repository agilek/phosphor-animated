import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M104,176H64a48,48,0,0,1,0-96h40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M104,176H64a48,48,0,0,1,0-96h40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M104,176H64a48,48,0,0,1,0-96h40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M104,176H64a48,48,0,0,1,0-96h40" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM112,168H80a40,40,0,0,1,0-80h32a8,8,0,0,1,0,16H80a24,24,0,0,0,0,48h32a8,8,0,0,1,0,16Zm64,0H144a8,8,0,0,1,0-16h32a24,24,0,0,0,0-48H144a8,8,0,0,1,0-16h32a40,40,0,0,1,0,80Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="80" width="224" height="96" rx="48" opacity="0.2" fill="currentColor"/><path d="M104,176H64a48,48,0,0,1,0-96h40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const LinkSimpleHorizontalBreakIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
