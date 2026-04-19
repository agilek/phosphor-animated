import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 136 128 168 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="112 160 80 128 112 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CaretCircleDoubleLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
