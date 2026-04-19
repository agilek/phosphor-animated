import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="96" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="96" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="96" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="96" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="96" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MedalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
