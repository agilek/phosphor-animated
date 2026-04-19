import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const UmbrellaSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
