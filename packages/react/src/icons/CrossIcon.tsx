import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M112,24h32a8,8,0,0,1,8,8V80h48a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32A8,8,0,0,1,112,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M112,24h32a8,8,0,0,1,8,8V80h48a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32A8,8,0,0,1,112,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M112,24h32a8,8,0,0,1,8,8V80h48a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32A8,8,0,0,1,112,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M112,24h32a8,8,0,0,1,8,8V80h48a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32A8,8,0,0,1,112,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M112,24h32a8,8,0,0,1,8,8V80h48a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32A8,8,0,0,1,112,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CrossIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
