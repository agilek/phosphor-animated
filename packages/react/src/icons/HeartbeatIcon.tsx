import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24.33,96A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-35.36-19-64.84-48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HeartbeatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
