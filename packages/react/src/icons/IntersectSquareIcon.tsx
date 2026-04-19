import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const IntersectSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
