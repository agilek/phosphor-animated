import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ChartScatterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
