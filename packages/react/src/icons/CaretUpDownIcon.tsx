import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 176 128 224 176 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 80 128 32 176 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 176 128 224 176 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 80 128 32 176 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 176 128 224 176 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 80 128 32 176 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 176 128 224 176 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="80 80 128 32 176 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="80 176 128 224 176 176 80 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="80 80 128 32 176 80 80 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretUpDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
