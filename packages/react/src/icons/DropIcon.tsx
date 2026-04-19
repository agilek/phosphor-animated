import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M166.17,156A40.11,40.11,0,0,1,140,182.17" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const DropIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
