import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 56 24 104 72 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="24 56 24 104 72 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="24 56 24 104 72 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="24 56 24 104 72 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="24 56 24 104 72 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowCounterClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
