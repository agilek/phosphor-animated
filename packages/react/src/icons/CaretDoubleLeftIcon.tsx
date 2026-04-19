import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 208 120 128 200 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="200 208 120 128 200 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="200 208 120 128 200 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="200 208 120 128 200 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="200 208 120 128 200 48 200 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 208 40 128 120 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
