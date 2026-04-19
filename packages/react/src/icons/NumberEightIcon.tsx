import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="168" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="168" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="168" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="168" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="168" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NumberEightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
