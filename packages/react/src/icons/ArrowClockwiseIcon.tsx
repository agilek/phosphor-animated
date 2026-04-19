import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="184 104 232 104 232 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="184 104 232 104 232 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="184 104 232 104 232 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="184 104 232 104 232 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="184 104 232 104 232 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
