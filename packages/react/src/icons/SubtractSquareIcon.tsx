import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 96 216 96 216 216 96 216 96 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 96 216 96 216 216 96 216 96 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 96 216 96 216 216 96 216 96 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 96 216 96 216 216 96 216 96 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="40" width="120" height="120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 96 216 96 216 216 96 216 96 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SubtractSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
