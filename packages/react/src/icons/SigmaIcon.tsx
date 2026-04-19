import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const SigmaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
