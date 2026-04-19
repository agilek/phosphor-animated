import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 128 48 80 96 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 48 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="96 128 48 80 96 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 48 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="192 224 192 80 48 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 128 48 80 96 32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="192 224 192 80 48 80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="96 128 48 80 96 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 48 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="96 128 48 80 96 32 96 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 224 192 80 96 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
