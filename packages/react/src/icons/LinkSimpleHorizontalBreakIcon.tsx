import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const LinkSimpleHorizontalBreakIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
