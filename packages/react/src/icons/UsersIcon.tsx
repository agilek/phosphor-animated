import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M10.23,200a88,88,0,0,1,147.54,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="84" cy="108" r="52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152.69,59.7A52,52,0,1,1,172,160" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M10.23,200a88,88,0,0,1,147.54,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="84" cy="108" r="52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152.69,59.7A52,52,0,1,1,172,160" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="84" cy="108" r="52" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M10.23,200a88,88,0,0,1,147.54,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152.69,59.7A52,52,0,1,1,172,160" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="84" cy="108" r="52" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M13,196a88,88,0,0,1,142,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M172,160a87.86,87.86,0,0,1,71,36" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M158.62,57.74A52,52,0,1,1,172,160" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M10.23,200a88,88,0,0,1,147.54,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="84" cy="108" r="52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M152.69,59.7A52,52,0,1,1,172,160" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const UsersIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
