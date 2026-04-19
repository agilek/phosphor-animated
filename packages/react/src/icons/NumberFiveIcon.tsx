import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberFiveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
