import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ClipboardIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
