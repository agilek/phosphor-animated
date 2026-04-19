import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M232,180,55.37,130.54A32,32,0,0,1,32,99.73V48a8,8,0,0,1,10.53-7.59L48,42.24,60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M256,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H248A8,8,0,0,1,256,216Zm-24-24a8,8,0,0,0,8-8V148.32a40.13,40.13,0,0,0-29.28-38.54l-60.84-17-22.5-53.63a8,8,0,0,0-4.85-4.5l-5.47-1.82A16,16,0,0,0,96,48V77.39L66.13,68.88,55.52,39.51a8,8,0,0,0-5-4.87l-5.47-1.82A16,16,0,0,0,24,48v55.72a40.12,40.12,0,0,0,29.21,38.52L229.84,191.7A8,8,0,0,0,232,192Z" fill="currentColor"/></>,
  duotone: <><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AirplaneLandingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
