import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FlashlightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
