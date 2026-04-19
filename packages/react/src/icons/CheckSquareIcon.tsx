import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CheckSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
