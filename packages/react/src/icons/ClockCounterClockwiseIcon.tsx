import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 104 32 104 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 104 32 104 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 104 32 104 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 104 32 104 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 104 32 104 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ClockCounterClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
