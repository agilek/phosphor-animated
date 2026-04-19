import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12A95.92,95.92,0,1,0,218,94.56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,13.11,43.46" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M161.94,94.06a48,48,0,1,0,14,31.2" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TargetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
