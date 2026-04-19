import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 128 216 176 168 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="168 128 216 176 168 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="168 128 216 176 168 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="168 128 216 176 168 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="168 128 216 176 168 224 168 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 168 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowDownRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
