import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,176v8a32,32,0,0,0,64,0v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,176v8a32,32,0,0,0,64,0v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,176v8a32,32,0,0,0,64,0v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,176v8a32,32,0,0,0,64,0v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,176v8a32,32,0,0,0,64,0v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LampPendantIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
