import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="240 104 240 80 128 80 80 208 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="240 104 240 80 128 80 80 208 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="240 104 240 80 128 80 80 208 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="240 104 240 80 128 80 80 208 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="240 104 240 80 128 80 80 208 32 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const RadicalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
