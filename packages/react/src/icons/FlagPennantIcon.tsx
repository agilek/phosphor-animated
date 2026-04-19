import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 168 240 104 56 40 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="56 168 240 104 56 40 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="56 168 240 104 56 40 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="56 168 240 104 56 40 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="56 168 240 104 56 40 56 216" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const FlagPennantIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
