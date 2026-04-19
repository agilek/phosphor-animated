import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M156,152a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="56" width="160" height="144" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M156,152a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="56" width="160" height="144" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M156,152a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="56" width="160" height="144" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M156,152a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="60" width="160" height="136" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,60V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,196v28a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V196" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M156,152a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="48" y="56" width="160" height="144" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const LegoSmileyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
