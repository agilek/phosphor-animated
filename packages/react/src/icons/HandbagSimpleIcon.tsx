import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HandbagSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
