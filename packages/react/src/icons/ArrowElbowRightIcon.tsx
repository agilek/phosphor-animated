import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 80 232 80 232 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="160 80 232 80 232 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="160 80 232 80 232 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="160 80 232 80 232 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="160 80 232 80 232 152 160 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 196 116" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
