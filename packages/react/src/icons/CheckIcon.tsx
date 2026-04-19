import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="40 144 96 200 224 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="40 144 96 200 224 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="40 144 96 200 224 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="40 144 96 200 224 72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="64 136 104 176 200 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CheckIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
