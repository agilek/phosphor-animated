import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 72 136 48 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="96 72 136 48 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="96 72 136 48 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="96 72 136 48 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="96 72 136 48 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberOneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
