import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 120 128 48 200 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="56 120 128 48 200 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="56 120 128 48 200 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="56 120 128 48 200 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="56 120 128 48 200 120 56 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ControlIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
