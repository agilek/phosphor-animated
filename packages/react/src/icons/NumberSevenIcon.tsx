import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 48 168 48 120 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="88 48 168 48 120 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="88 48 168 48 120 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="88 48 168 48 120 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="88 48 168 48 120 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberSevenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
