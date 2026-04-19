import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const PulseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
