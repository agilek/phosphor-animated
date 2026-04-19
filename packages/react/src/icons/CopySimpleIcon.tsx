import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="72" width="144" height="144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 40 216 40 216 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="72" width="144" height="144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 40 216 40 216 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="72" width="144" height="144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 40 216 40 216 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="76" width="140" height="140" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="76 40 216 40 216 180" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="72" width="144" height="144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 40 216 40 216 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CopySimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
