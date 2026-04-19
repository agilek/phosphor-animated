import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M176,200a24,24,0,0,1-48,0V136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,136c0-72,40-104,40-104s40,32,40,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const UmbrellaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
