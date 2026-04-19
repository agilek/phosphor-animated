import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 128 216 80 168 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 224 72 80 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="168 128 216 80 168 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 224 72 80 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="168 128 216 80 168 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 224 72 80 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="168 128 216 80 168 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 224 72 80 216 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="168 128 216 80 168 32 168 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 224 72 80 168 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
