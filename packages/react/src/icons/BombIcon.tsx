import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,64h48a8,8,0,0,1,8,8V86.66a80,80,0,1,1-64,0V72A8,8,0,0,1,88,64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,64s0-40,32-40,40,56,72,56,32-40,32-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,208a49.52,49.52,0,0,1-40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M88,64h48a8,8,0,0,1,8,8V86.66a80,80,0,1,1-64,0V72A8,8,0,0,1,88,64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,64s0-40,32-40,40,56,72,56,32-40,32-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,208a49.52,49.52,0,0,1-40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M88,64h48a8,8,0,0,1,8,8V86.66a80,80,0,1,1-64,0V72A8,8,0,0,1,88,64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,64s0-40,32-40,40,56,72,56,32-40,32-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,208a49.52,49.52,0,0,1-40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M88,64h48a8,8,0,0,1,8,8V86.66a80,80,0,1,1-64,0V72A8,8,0,0,1,88,64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,64s0-40,32-40,36,56,68,56,32-40,32-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M100,198.17A40,40,0,0,1,72,160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,64h48a8,8,0,0,1,8,8V86.66a80,80,0,1,1-64,0V72A8,8,0,0,1,88,64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,64s0-40,32-40,40,56,72,56,32-40,32-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M104,208a49.52,49.52,0,0,1-40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BombIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
