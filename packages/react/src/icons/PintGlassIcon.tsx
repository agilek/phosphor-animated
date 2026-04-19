import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PintGlassIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
