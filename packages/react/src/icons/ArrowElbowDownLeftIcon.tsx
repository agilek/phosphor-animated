import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 128 48 176 96 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="96 128 48 176 96 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="96 128 48 176 96 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="96 128 48 176 96 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="96 128 48 176 96 224 96 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 96 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
