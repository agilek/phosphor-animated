import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="72 48 8 192 136 192 72 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="72 48 8 192 136 192 72 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="72 48 8 192 136 192 72 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="76 48 12 192 140 192 76 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="140 192 244 192 180 48 76 48 76 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="72 48 8 192 136 192 72 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
