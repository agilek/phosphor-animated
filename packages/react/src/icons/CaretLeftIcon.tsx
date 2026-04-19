import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 208 80 128 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="160 208 80 128 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="160 208 80 128 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="160 208 80 128 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="160 208 80 128 160 48 160 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CaretLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
