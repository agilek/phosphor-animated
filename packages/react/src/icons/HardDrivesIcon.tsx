import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="144" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="144" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="144" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="48" width="176" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="144" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="64" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HardDrivesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
