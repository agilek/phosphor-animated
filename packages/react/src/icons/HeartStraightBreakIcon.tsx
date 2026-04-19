import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const HeartStraightBreakIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
