import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const DoorIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
