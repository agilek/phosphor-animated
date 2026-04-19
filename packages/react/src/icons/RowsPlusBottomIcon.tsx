import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="120" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="40" y="120" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="40" y="120" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="40" y="124" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="120" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="48" width="176" height="40" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const RowsPlusBottomIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
