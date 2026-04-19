import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="68" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 224 56 224 192 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M187.16,151A71.69,71.69,0,0,1,200,192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56.91,180.52a72,72,0,0,1,106.45-51.25" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="68" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 224 56 224 192 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M187.16,151A71.69,71.69,0,0,1,200,192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56.91,180.52a72,72,0,0,1,106.45-51.25" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="68" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 224 56 224 192 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M187.16,151A71.69,71.69,0,0,1,200,192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56.91,180.52a72,72,0,0,1,106.45-51.25" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="68" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 224 56 224 192 112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M193.67,162.44A71.51,71.51,0,0,1,199.56,184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M59.71,169.13a72,72,0,0,1,108-37.17" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56.91,180.52a72,72,0,0,1,106.45-51.25" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="68" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 224 56 224 192 104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M187.16,151A71.69,71.69,0,0,1,200,192" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SeatbeltIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
