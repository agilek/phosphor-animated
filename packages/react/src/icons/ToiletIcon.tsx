import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,112a88,88,0,0,1-176,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,112a88,88,0,0,1-176,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,112a88,88,0,0,1-176,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M64,108V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v68" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,108a88,88,0,0,1-176,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M93,188.74l-4.88,34.13A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13L163,188.75" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,112a88,88,0,0,1-176,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ToiletIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
