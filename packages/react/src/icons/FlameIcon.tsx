import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FlameIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
