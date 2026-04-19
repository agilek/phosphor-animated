import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FanIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
