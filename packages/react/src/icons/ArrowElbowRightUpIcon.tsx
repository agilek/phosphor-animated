import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="120 96 168 48 216 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 192 168 192 168 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="120 96 168 48 216 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 192 168 192 168 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="120 96 168 48 216 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 192 168 192 168 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="120 96 168 48 216 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 192 168 192 168 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="120 96 168 48 216 96 120 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 192 168 192 168 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowRightUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
