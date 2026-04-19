import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CloudSnowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
