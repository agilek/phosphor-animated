import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 40 24 128 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 232 128 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 40 24 128 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 232 128 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 40 24 128 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 232 128 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 40 24 128 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 232 128 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="80 40 24 128 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 232 128 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BracketsAngleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
