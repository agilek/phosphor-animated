import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M232,180,55.37,130.54A32,32,0,0,1,32,99.73V48a8,8,0,0,1,10.53-7.59L48,42.24,60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AirplaneLandingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
