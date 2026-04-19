import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,32c17.67,0,32,43,32,96s-14.33,96-32,96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128c0,17.67-43,32-96,32s-96-14.33-96-32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SphereIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
