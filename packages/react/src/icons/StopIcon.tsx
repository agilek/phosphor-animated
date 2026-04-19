import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="48" width="160" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><rect x="48" y="48" width="160" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="48" y="48" width="160" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="48" y="48" width="160" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><rect x="48" y="48" width="160" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const StopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
