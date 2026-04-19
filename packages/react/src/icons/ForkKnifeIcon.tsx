import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,168H152s0-104,56-128V224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,40,40,88a40,40,0,0,0,80,0l-8-48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,168H152s0-104,56-128V224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,40,40,88a40,40,0,0,0,80,0l-8-48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,168H152s0-104,56-128V224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,40,40,88a40,40,0,0,0,80,0l-8-48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,168H152s0-104,56-128V224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M44,40,40,88a40,40,0,0,0,80,0l-4-48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,168H152s0-104,56-128V224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,40,40,88a40,40,0,0,0,80,0l-8-48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ForkKnifeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
