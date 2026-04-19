import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,176h48a8,8,0,0,1,0,16H128a64,64,0,0,1,0-128h48a8,8,0,0,1,0,16H128a48,48,0,0,0,0,96Z" fill="currentColor"/></>,
  duotone: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72Z" opacity="0.2" fill="currentColor"/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const SubsetProperOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
