import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="16 130.29 54.4 168 144 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="16 130.29 54.4 168 144 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="16 130.29 54.4 168 144 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="16 130.29 54.4 168 144 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="134.11 152 150.4 168 240 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="16 130.29 54.4 168 144 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ChecksIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
