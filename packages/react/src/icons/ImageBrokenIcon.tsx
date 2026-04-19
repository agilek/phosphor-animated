import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M104,208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V88l-48,16-16,40-40,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l39,39" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M104,208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V88l-48,16-16,40-40,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l39,39" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M104,208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V88l-48,16-16,40-40,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l39,39" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M95.57,208l18-54.05,40.27-16.1L170,97.58l54.05-18V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l32.84,32.84" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M104,208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V88l-48,16-16,40-40,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l39,39" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ImageBrokenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
