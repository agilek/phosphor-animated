import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const OnigiriIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
