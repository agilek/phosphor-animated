import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="184 168 64 168 160 48 160 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="184 168 64 168 160 48 160 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="184 168 64 168 160 48 160 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="184 168 64 168 160 48 160 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="184 168 64 168 160 48 160 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
