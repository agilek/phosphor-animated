import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-10,99.66c-13.19,15-25.34,20.29-36.37,20.29-14.94,0-27.81-9.61-38.43-17.54-19.2-14.34-31.89-23.81-53.2.48a8,8,0,1,1-12-10.55c31.05-35.41,56.34-16.53,74.8-2.75,19.2,14.34,31.89,23.81,53.2-.48a8,8,0,1,1,12,10.55Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="16" opacity="0.2" fill="currentColor"/><path d="M40,130.42c72-89.55,104,84.71,176-4.84" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const TildeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
