import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 200 128 120 208 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="48 200 128 120 208 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="48 200 128 120 208 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="48 200 128 120 208 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="48 200 128 120 208 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 120 128 40 208 120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
