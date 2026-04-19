import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const RectangleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
