import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 128 76 56 180 200 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="24 128 76 56 180 200 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="24 128 76 56 180 200 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="24 128 76 56 180 200 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="24 128 76 56 180 200 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const WaveTriangleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
