import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SphereIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
