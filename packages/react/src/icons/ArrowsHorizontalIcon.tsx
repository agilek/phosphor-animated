import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 96 24 128 56 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="56 96 24 128 56 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="56 96 24 128 56 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="56 96 24 128 56 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="56 96 24 128 56 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 96 232 128 200 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowsHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
