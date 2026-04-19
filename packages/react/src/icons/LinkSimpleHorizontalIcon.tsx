import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,176H64a48,48,0,0,1,0-96h40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,80h40a48,48,0,0,1,48,48h0a48,48,0,0,1-48,48H152" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LinkSimpleHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
