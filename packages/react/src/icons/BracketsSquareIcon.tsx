import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 40 40 40 40 216 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 40 40 40 40 216 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 40 40 40 40 216 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 40 40 40 40 216 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="80 40 40 40 40 216 80 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 40 216 40 216 216 176 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BracketsSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
