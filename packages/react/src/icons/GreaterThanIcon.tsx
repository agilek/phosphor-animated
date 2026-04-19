import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 56 216 128 64 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="64 56 216 128 64 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="64 56 216 128 64 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="64 56 216 128 64 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="64 56 216 128 64 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const GreaterThanIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
