import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M160,224l-52-40L56,224V80a8,8,0,0,1,8-8h88a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V184l-40-30.76" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BookmarksIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
